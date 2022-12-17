import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';


@Component({
  selector: 'app-inactive-laptops',
  templateUrl: './inactive-laptops.component.html',
  styleUrls: ['./inactive-laptops.component.css']
})
export class InactiveLaptopsComponent implements OnInit {
  laptop : Laptop[];
  search:any;
  p:number=1;
  public sort=true;
  public namesort: boolean = false;
  public noOfItem:any=2;
  constructor(private lapService: LaptopService, private route:Router, private confirmService:NgConfirmService) { }

  ngOnInit(): void {
    this.getInActiveLaptopList();
  }

  getInActiveLaptopList(){
    this.lapService.getInActiveLaptopList().subscribe(data=> {this.laptop=data; console.log(data)});
  }

  makeLaptopActive(id:number) {
    this.lapService.makeLaptopActive(id).subscribe(data=> {console.log(data);
    this.getInActiveLaptopList();})
  }

  key:string;
  reverse:boolean=false;
    sorting(key: any){
      this.key=key;
      this.reverse=!this.reverse; 
    }

    //-------------------FOR SORTING ID COLUMN------------------------
    sortId(){
      if(this.sort) {
        let newarr = this.laptop.sort((a,b)=> a.id - b.id);
        this.laptop= newarr;
      }
      else{
        let newarr = this.laptop.sort((a,b)=> b.id- a.id);
        this.laptop= newarr;
      }
      this.sort= !this.sort;
    }
    //------------------FOR SORTING PRICE COLUMN------------------------

    sortPrice(){
      if(this.sort) {
        let newarr = this.laptop.sort((a,b)=> a.price - b.price);
        this.laptop= newarr;
      }
      else{
        let newarr = this.laptop.sort((a,b)=> b.price- a.price);
        this.laptop= newarr;
      }
      this.sort= !this.sort;
    }

}
