import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {

  laptop:Laptop =new Laptop();
  id:number;
 
  constructor(private laptopService:LaptopService,private route:Router, private activeroute: ActivatedRoute) { }

     ngOnInit(): void {
      this.id = this.activeroute.snapshot.params['id'];
      this.laptopService.getById(this.id).subscribe(data=> { this.laptop=data} ,
     error=> console.log(error)  );

      }

      list() {
        this.route.navigate(['laptop-list']);
      }





}
