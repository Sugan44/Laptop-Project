import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopBrand } from '../laptopbrand';
import { LaptopbrandService } from '../laptopbrand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-laptopbrand',
  templateUrl: './view-laptopbrand.component.html',
  styleUrls: ['./view-laptopbrand.component.css']
})
export class ViewLaptopbrandComponent implements OnInit {
  laptopbrand:LaptopBrand = new LaptopBrand();
  id:number;

  constructor(private activeroute:ActivatedRoute ,private laptopbrandservice:LaptopbrandService ,private route:Router) { }

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    this.laptopbrandservice.getById(this.id).subscribe(data=> {this.laptopbrand=data},
    error=> console.log(error));
   }

  list() {
    this.route.navigate(['laptopbrand-list']);
  }


}
