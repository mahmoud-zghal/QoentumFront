import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Region } from 'models/region';
import { __values } from 'tslib';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})

export class RegionComponent implements OnInit {
  searchText:any;
   regionlist:any=[]; 
  
  // prouser:any;
/*  onclick(prouser:any){
    console.log(prouser.value);
   //if(prouser.value.length()>0){
     this.regionlist.push(prouser.value);
     prouser.value='';
    // this.regionlist.reset();
  // }
 
  }
  remove(deleteme:any){
    this.regionlist.splice(deleteme,1);

  }*/
 region:Region =new Region();
  constructor(private regionService:RegionService, private route:Router,) { }
  ngOnInit(): void {
    this.regionlist.getAllRegions();
  }
  /*public onClick(){
    this.regionlist.open(RegionComponent);}*/

 onclick() {
    console.log(this.region)
    this.regionService.createRegion(this.region).subscribe(data=>{
      alert("create region succesfully");
    },error=>alert("error"));
  }
  update(Id:number, value:Region) {
    console.log(this.region)
    this.regionService.updateRegion(Id,this.region).subscribe(data=>{
      alert("update region succesfully");
    },error=>alert("error"));
  }
  delete(id: number) {
    console.log(this.region)
    this.regionService.deleteRegion(id).subscribe(data=>{
      alert("delete region succesfully");
    },error=>alert("error"));
  }


 

}
