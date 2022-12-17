import { Component, OnInit } from '@angular/core';
import { LaptopBrand } from '../laptopbrand';
import { LaptopbrandService } from '../laptopbrand.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-laptopbrand',
  templateUrl: './create-laptopbrand.component.html',
  styleUrls: ['./create-laptopbrand.component.css']
})
export class CreateLaptopbrandComponent implements OnInit {

  laptopbrand:LaptopBrand=new LaptopBrand();
  constructor(private laptopbrandService:LaptopbrandService,private route:Router,
    private httpClient:HttpClient, private toastr:ToastrService ) { }

  ngOnInit(): void {
  }

  onSubmitBrand() {
   /*  console.log(this.laptopbrand)  */
    this.laptopbrandService.addLaptopBrand(this.laptopbrand).subscribe(data=>{
      console.log(data);
      this.toastr.success("Brand Created Successfully")
      this.route.navigate(['laptopbrand-list']);
    })
  }



  
}
