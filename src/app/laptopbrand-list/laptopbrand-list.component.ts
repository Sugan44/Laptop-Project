import { Component, OnInit } from '@angular/core';
import { LaptopBrand } from '../laptopbrand';
import { LaptopbrandService } from '../laptopbrand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptopbrand-list',
  templateUrl: './laptopbrand-list.component.html',
  styleUrls: ['./laptopbrand-list.component.css']
})
export class LaptopbrandListComponent implements OnInit {
  laptopbrand:LaptopBrand[];


  constructor(private laptopbrandservice:LaptopbrandService, private route:Router) { }

  ngOnInit(): void {
    this.getallbrand();
  }

  getallbrand() {
    this.laptopbrandservice.getallbrand().subscribe(data=> {console.log(this.laptopbrand=data) })
  }

  view(id:number) {
    this.route.navigate(['view-laptopbrand',id]);
  }

  deleteById(id:number) {

    this.laptopbrandservice.deleteById(id).subscribe(data=>{console.log(data), this.getallbrand()});
  }

  updateById(id:number) {
    this.route.navigate(['update-laptopbrand',id]);
  }


}
