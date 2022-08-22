import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Continent } from 'models/continent';
import { ContinentService } from '../continent.service';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss']
})
export class ContinentComponent implements OnInit {
  searchText:any;
  continentlist:any =[]; 
  
  /*// prouser:any;
  onclick(prouser:any){
    console.log(prouser.value);
   //if(prouser.value.length()>0){
     this.continentlist.push(prouser.value);
     prouser.value='';
    // this.regionlist.reset();
  // }
 
  }
  remove(deleteme:any){
    this.continentlist.splice(deleteme,1);

  }*/

  continent:Continent =new Continent();
  constructor(private continentService:ContinentService, private route:Router) { }
  ngOnInit(): void {
    this.continentlist.getAllContinents();
  }
 onclick() {
    console.log(this.continent)
    this.continentService.createContinent(this.continent).subscribe(data=>{
      alert("create region succesfully");
    },error=>alert("error"));
  }
  update(Id:number, value:Continent) {
    console.log(this.continent)
    this.continentService.updateContinent(Id,this.continent).subscribe(data=>{
      alert("update region succesfully");
    },error=>alert("error"));
  }
  delete(id: number) {
    console.log(this.continent)
    this.continentService.deleteContinent(id).subscribe(data=>{
      alert("delete region succesfully");
    },error=>alert("error"));
  }

}
