import { Component, OnInit, Inject, Input, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm!: FormGroup;
  actionButton: String = "Add User"

  constructor(private formBuilder: FormBuilder, private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public editUser:any,
    private dialogref: MatDialogRef<AddUserComponent>) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      job: ['', Validators.required],


    });
    if (this.editUser) {
      this.actionButton = "Update"
        this.userForm.controls['name'].setValue(
          this.editUser.name);

          this.userForm.controls['job'].setValue(
            this.editUser.job);
   }

  }

//   addUser() {
//     if(this.userForm.valid){
//       console.log(this.userForm.value)
//       this.api.addUsers(this.userForm.value).subscribe({
//                 next: (res) => {
//                   console.log(res);
//                   alert('User added successfully');
//                   this.userForm.reset();
//                   this.dialogref.close('Add User');

//                 },
//                 error: () => {
//                   alert('Error');
//                 },
//               });

//   }
// }

  addUser() {
    if(!this.editUser){
      if (this.userForm.valid) {
        //console.log(this.userForm.value)
        this.api.addUsers(this.userForm.value).subscribe({
          next: (res) => {
            console.log(res);
            alert('User added successfully');
            this.userForm.reset();
            this.dialogref.close('Add User');

          },
          error: () => {
            alert('Error');
          },
        });
      }
      }else{
        this.updateUser();
    }
  }

updateUser(){
  this.api.updateUser(this.userForm.value,this.editUser.id).subscribe({
    next: (res)=>{
      console.log(res);
      alert('User updated successfully');
      this.userForm.reset();
      this.dialogref.close('Update');
    },
    error: () => {
      alert('Error while updating');
    },
  });


}
}
