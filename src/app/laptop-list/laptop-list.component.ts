import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptop : Laptop[];

  constructor(private lapService: LaptopService, private route:Router) { }

  ngOnInit(): void {
     this.getLap();
  }

          getLap() {
                     this.lapService.getValues().subscribe(data=> {this.laptop=data;})
                   }

          deleteId(id:number) {
            this.lapService.deleteById(id).subscribe(data=> { console.log(data);
              this.getLap();
            }) 
          }

          updateId(id:number) {
            this.route.navigate(['update-laptop',id])
          }

          details(id:number) {
            this.route.navigate(['laptop-details',id])
          }

}
