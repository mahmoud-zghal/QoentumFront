import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginUserComponent } from './login-user/login-user.component'
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatButtonModule} from '@angular/material/button'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { RegionComponent } from './region/region.component';
import { PaysComponent } from './pays/pays.component';
import { ContinentComponent } from './continent/continent.component';
import { RegulateurComponent } from './regulateur/regulateur.component';
import { RegionPipePipe } from './region-pipe.pipe';
import { PaysPipe } from './pays.pipe';
import { ContinentPipe } from './continent.pipe'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    RegisterUserComponent,
    AccueilComponent,
    HomeComponent,
    ClientComponent,
    RegionComponent,
    PaysComponent,
    ContinentComponent,
    RegulateurComponent,
    RegionPipePipe,
    PaysPipe,
    ContinentPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
