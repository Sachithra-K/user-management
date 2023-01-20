import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get<any>(`https://reqres.in/api/users?page`);
  }

  addUsers(data : any){
    return this.http.post<any>(`https://reqres.in/api/users`,data);
  }

  updateUser(data:any, id:number){
    return this.http.put<any>(`https://reqres.in/api/users/`+id, data);
  }

  deleteUsers(id:number){
    return this.http.delete<any>(`https://reqres.in/api/users/`+id);
  }
}
