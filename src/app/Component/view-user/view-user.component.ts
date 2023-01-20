import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import {ApiService} from 'src/app/services/api.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  displayedColumns: string[] = ['id','email', 'first_name', 'last_name','avatar','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private matdialog: MatDialog, private api:ApiService) {

   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getallUsers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(){
    this.matdialog.open(AddUserComponent,{
      width: '30%',
    }).afterClosed().subscribe(value=>{
      if(value==='Add User'){
        this.getallUsers();
      }
    })

  }

  getallUsers(){
    this.api.getUser()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        console.log(res);
      },
      error:(err)=>{
        alert("Error")
      }
    })
  }

  editUser(row:any){
    console.log(row);
    this.matdialog.open(AddUserComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(value=>{
      if(value==='Update'){
        this.getallUsers();
      }
    })
  }

  openDeleteDialog(id:number){
    this.matdialog.open(DeleteDialogComponent,{
      width:'23%'
    }).afterClosed().subscribe(value=>{
      if(value==='Yes'){
        this.deleteUser(id);
      }
    })
  }

  deleteUser(id:number){
    this.api.deleteUsers(id)
    .subscribe({
      next: (res)=>{
        console.log(res);
        alert("User Deleted Successfully")
        this.getallUsers();
      },
      error:(err)=>{
        console.log(err);
        alert("Error")
      }
    })
  }

}


