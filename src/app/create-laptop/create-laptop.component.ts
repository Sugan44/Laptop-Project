import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-laptop',
  templateUrl: './create-laptop.component.html',
  styleUrls: ['./create-laptop.component.css']
})
export class CreateLaptopComponent implements OnInit {
  laptop:Laptop =new Laptop();
  constructor(private laptopService:LaptopService,private route:Router) { }

  ngOnInit(): void {
  }
  
  goToLaptop(){
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

}
