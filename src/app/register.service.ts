import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private _UserUrl="";
 baseUrl="http::/localhost:8081/user";
  constructor(private httpClient: HttpClient) { }

  registerUser(user: User) : Observable<Object> {
console.log(user);
return this.httpClient.post('$(this.baseUrl)', user ); 
  }

  getUser(){
    return this.httpClient.get<any>(this._UserUrl)
  }
  
  addUser(user: any){
  return  this.httpClient.post<any>(this._UserUrl,user)
  }
  deleteUser(username:any):Observable<object>{
    return this.httpClient.delete(this._UserUrl,username)
  }
  updateUser(user:any): Observable<Object>{
    return this.httpClient.put<any>(this._UserUrl, user);
}
}
