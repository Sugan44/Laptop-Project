import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';
import { Laptop } from '../laptop';

@Component({
  selector: 'app-update-laptop',
  templateUrl: './update-laptop.component.html',
  styleUrls: ['./update-laptop.component.css']
})
export class UpdateLaptopComponent implements OnInit {

  constructor(private laptopService:LaptopService,private route:Router, private activeroute: ActivatedRoute) { }
  private id:number;
  laptop:Laptop= new Laptop();
  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    this.display();
  }

  display() {
    this.laptopService.getById(this.id).subscribe(data=> { 
      this.laptop=data; });
  }

  onUpdate() {
    this.laptopService.updateById(this.id, this.laptop).subscribe(data=>{
      console.log(data);
    this.route.navigate(['laptop-list']);
  })
}
}
