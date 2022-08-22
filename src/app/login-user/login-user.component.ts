import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  user: User=new User();
  constructor(private loginuserservice: LoginuserService,private route:Router) { }

  ngOnInit(): void {
  }

  /*userlogin() {
    console.log(this.user)
    this.loginuserservice.loginuser(this.user).subscribe(data=>{
      alert("login succesfully");
    },error=>alert("error"));
    
  }
*/
  userlogin() {
    console.log(this.user);
    if(this.user.UserId == "ablo" && this.user.password=="ablo"){
      this.route.navigate(['/home']);
    }
  }
 
}
