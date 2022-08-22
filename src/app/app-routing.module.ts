import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { RegionComponent } from './region/region.component';
import { PaysComponent } from './pays/pays.component';
import { ContinentComponent } from './continent/continent.component';

const routes: Routes = [
  
  { path : '', component :  LoginUserComponent },
 
  { path : 'register-user', component : RegisterUserComponent },
  { path : 'login-user', component : LoginUserComponent } ,
  { path : 'accueil', component : AccueilComponent } ,
  { path : 'home', component : HomeComponent } ,
  { path : 'client', component : ClientComponent } ,
  { path : 'region', component : RegionComponent } ,
  { path : 'pays', component : PaysComponent } ,
  { path : 'continent', component : ContinentComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
