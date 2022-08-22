import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { Client } from '../client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client:Client =new Client();
  clientform:FormGroup;
  clientlist:any; 
  constructor( private fb: FormBuilder) { 
   
    this.clientlist=[];
    this.clientform = this.fb.group ({
     Id: ['',Validators.required],
     Nom: ['',Validators.required],
     Logo: ['',Validators.required],
     Adress: ['',Validators.required],
     Idproject: ['',Validators.required],
     Datedebutlicence: ['',Validators.required],
     Datefinlicence: ['',Validators.required],
     Typelicence: ['',Validators.required],
     Regulateur: ['',Validators.required],
   
    })
  }
  public addItem(): void{
   
      this.clientlist.push(this.clientform.value);
     this.clientform.reset();
  }
  reset(): void{
    this.clientform.reset();
  }
 /* ondelete(element){
    this.clientlist.forEach((value , index)=>{
      if(value == element)
      this.clientlist.splice(index,1);
   });
    
    }*/

  ngOnInit(): void {
  }
   

}


