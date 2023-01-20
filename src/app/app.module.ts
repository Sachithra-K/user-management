import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { ViewUserComponent } from './Component/view-user/view-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MaterialModule } from './Material/material.module';
import { HeaderComponent } from './Component/header/header.component';
import { AddUserComponent } from './Component/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteDialogComponent } from './Component/delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewUserComponent,
    HeaderComponent,
    AddUserComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MaterialModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
