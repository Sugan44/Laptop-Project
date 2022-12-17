import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {jsPDF} from"jspdf";

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {

  laptop:Laptop =new Laptop();
  id:number;
  @ViewChild('content',{static:false}) el!: ElementRef;
 
  constructor(private laptopService:LaptopService,private route:Router, private activeroute: ActivatedRoute) { }

     ngOnInit(): void {
      this.id = this.activeroute.snapshot.params['id'];
      this.laptopService.getById(this.id).subscribe(data=> { this.laptop=data} ,
     error=> console.log(error)  );

      }

      list() {
        this.route.navigate(['laptop-list']);
      }


      makePDF(){
        let pdf = new jsPDF('p','pt','a4');
        pdf.html(this.el.nativeElement,{
               callback: (pdf)=>{
            pdf.save("Laptop Details.pdf");
          } 
        });
      }





}
