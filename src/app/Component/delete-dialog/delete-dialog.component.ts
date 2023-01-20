import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private dialogref: MatDialogRef<DeleteDialogComponent>) { }

  ngOnInit(): void {
  }

  deleteUser(){
    this.dialogref.close('Yes');
  }

}
