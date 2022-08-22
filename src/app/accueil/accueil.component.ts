import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

   users:any=[] ;

  constructor(private userService:RegisterService, private loginuserservice:LoginuserService, private route:Router) {}
 /* public onClick(){
    this.dialogRef.open(RegisterUserComponent);}*/
    deconnecter() {
     // console.log(this.user)
      this.loginuserservice.logout();
    }
    
    public getUser(){
    this.userService.getUser().subscribe(data=>this.users=data)
   }
   public deleteUser(username:any){
      this.userService.deleteUser(username).subscribe(res=>{console.log(res);
      this.getUser();})
    }
    
    ngOnInit(): void {
    }
}
