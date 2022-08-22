import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl="http::/localhost:8081/user/login";
  constructor(private httpClient: HttpClient, private route:Router) { }
  loginuser(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post('${this.baseUrl}',user); 
  }
  save(User:string):void{
    localStorage.setItem('user', User);
  // this.route.navigate(['/acceuil']);
  }
  logout():void{
     localStorage.removeItem('user');
    this.route.navigate(['/']);
   }

}
