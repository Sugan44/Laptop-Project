import { Component, OnInit, ViewChild } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptop : Laptop[];
  search:any;
  p:number=1;
  public sort=true;
  public namesort: boolean = false;
  public noOfItem:any=2;
  constructor(private lapService: LaptopService, private route:Router, private confirmService:NgConfirmService ) { 
  }

  ngOnInit(): void {
     this.getLap();
  }

          getLap() {
                     this.lapService.getActiveLaptopList().subscribe(data=> {this.laptop=data; 
                     console.log(data)
                    console.log(this.laptop)
                    })
                   }

          deleteId(id:number) {
            this.confirmService.showConfirm("Are you Sure Want to Delete", 
            ()=> {this.lapService.deleteById(id).subscribe(data=> { console.log(data);
              this.getLap();
            })  },
            ()=> {this.getLap();} )
            
          }

          updateId(id:number) {
            this.route.navigate(['update-laptop',id])
          }

          details(id:number) {
            this.route.navigate(['laptop-details',id])
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
          //--------------------FOR SORTING COLOUR COLUMN---------------------
          sortRam(){
            if(this.sort) {
              let newarr = this.laptop.sort((a,b)=> a.ram - b.ram);
              this.laptop= newarr;
            }
            else{
              let newarr = this.laptop.sort((a,b)=> b.ram- a.ram);
              this.laptop= newarr;
            }
            this.sort= !this.sort;
          }
          //-----------------------------------------------------------------
          // sortBrand(property:Laptop){
          //   this.namesort =!this.namesort;
          //   let direction = this.namesort ? 1: -1;
          //   this.laptop.sort(function(a,b){
          //     if(a.brand < b.brand){
          //       return -1 *  direction;
          //     }
          //     else if(a.brand > b.brand){
          //       return 1 * direction;
          //     }
          //     else{
          //       return 0;
          //     }
          //   })
          // }
          //-----------------------------------------------------------------
          key:string;
          reverse:boolean=false;
          sorting(key: any){
            this.key=key;
            this.reverse=!this.reverse; 
          }

          //------------------------------------------------

          makeLaptopInactive(id:number) {
            this.lapService.makeLaptopInactive(id).subscribe(data=> {console.log(data);
            this.getLap();})
          }
          
}
