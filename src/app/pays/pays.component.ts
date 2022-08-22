import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from 'models/pays';
import { PaysService } from '../pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent implements OnInit {
 searchText:any;
  payslist:any =[]; 
  
 /* // prouser:any;
  onclick(prouser:any){
    console.log(prouser.value);
   //if(prouser.value.length()>0){
     this.payslist.push(prouser.value);
     prouser.value='';
    // this.regionlist.reset();
  // }
 
  }
  remove(deleteme:any){
    this.payslist.splice(deleteme,1);

  }*/

  pays:Pays =new Pays();
  constructor(private paysService:PaysService, private route:Router) { }
  ngOnInit(): void {
    this.payslist.getAllPays();
  }
 onclick() {
    console.log(this.pays)
    this.paysService.createPays(this.pays).subscribe(data=>{
      alert("create region succesfully");
    },error=>alert("error"));
  }
  update(Id:number, value:Pays) {
    console.log(this.pays)
    this.paysService.updatePays(Id,this.pays).subscribe(data=>{
      alert("update region succesfully");
    },error=>alert("error"));
  }
  delete(id: number) {
    console.log(this.pays)
    this.paysService.deletePays(id).subscribe(data=>{
      alert("delete region succesfully");
    },error=>alert("error"));
  }

}
