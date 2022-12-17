import { Component, OnInit } from '@angular/core';
import { LaptopBrand } from '../laptopbrand';
import { LaptopbrandService } from '../laptopbrand.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-laptopbrand',
  templateUrl: './update-laptopbrand.component.html',
  styleUrls: ['./update-laptopbrand.component.css']
})
export class UpdateLaptopbrandComponent implements OnInit {
  laptopbrand:LaptopBrand= new LaptopBrand();
  id:number;

  constructor(private laptopbrandservice:LaptopbrandService, private activeroute: ActivatedRoute, 
    private route: Router) { }

  ngOnInit(): void {
    this.id= this.activeroute.snapshot.params['id'];
    this.displaybrand();
  }

  displaybrand() {
    this.laptopbrandservice.getById(this.id).subscribe(data=>{this.laptopbrand=data});
  }

  onUpdateBrand() {
    this.laptopbrandservice.updateById(this.id, this.laptopbrand).subscribe(data=>{console.log(data)});
    this.route.navigate(['laptopbrand-list'])
  }

}
