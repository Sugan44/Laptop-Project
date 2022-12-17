import { Component, OnInit, ɵɵngDeclareClassMetadata } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';
import { LaptopbrandService } from '../laptopbrand.service';
import { LaptopBrand } from '../laptopbrand';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-laptop',
  templateUrl: './create-laptop.component.html',
  styleUrls: ['./create-laptop.component.css']
})
export class CreateLaptopComponent implements OnInit {
  brandCode:string;
  activebrands: LaptopBrand [];
  laptop:Laptop =new Laptop();
  constructor(private laptopService:LaptopService,private route:Router, private laptopbrandeservice: LaptopbrandService,
    private httpClient:HttpClient, private spinner:NgxSpinnerService) { }

    ngOnInit(): void {
      this.getActiveBrands();
    }
  
   async goToLaptop(){
      await wait (3000);
      this.route.navigate(['laptop-list']);
    }

    saveLaptop(){
      this.laptopService.addlaptop(this.laptop).subscribe(data=>{
      console.log(data);
      this.goToLaptop();
      })
    }

    onSubmit(){
     console.log(this.laptop)
     this.saveLaptop();
    }

   /* --------------------- BRAND DropDown-------------------------------> */

    getActiveBrands() {
      this.laptopbrandeservice.getActiveBrands().subscribe(data=> {
      console.log(data);
      this.activebrands=data});
    }

    onSelected() {
       this.laptopbrandeservice.getBrandCode(this.laptop.brand).subscribe(data=>{
        console.log(data);
        this.laptop.brandCode=data;
       }
       );
     }
     /* --------------------- BRAND DropDown-------------------------------> */

     spin(){
      this.spinner.show();
      setTimeout( ()=> {this.spinner.hide();},3000 )
     }

}

/* --------------------- Outside of Class -------------------------------> */
    function wait(timeToWait: number) {
       return new Promise ( (ressolve)=> {setTimeout(()=>  {ressolve("success"); } ,timeToWait)
                                         })
     }

