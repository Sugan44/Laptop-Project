import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLaptopComponent } from './create-laptop/create-laptop.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { CreateLaptopbrandComponent } from './create-laptopbrand/create-laptopbrand.component';
import { LaptopbrandListComponent } from './laptopbrand-list/laptopbrand-list.component';
import { ViewLaptopbrandComponent } from './view-laptopbrand/view-laptopbrand.component';
import { UpdateLaptopbrandComponent } from './update-laptopbrand/update-laptopbrand.component';
import { InactiveLaptopsComponent } from './inactive-laptops/inactive-laptops.component';

const routes: Routes = [
{path:'create-laptop',component:CreateLaptopComponent},
{path:'laptop-list', component:LaptopListComponent},
{path:'update-laptop/:id', component:UpdateLaptopComponent},
{path:'laptop-details/:id', component:LaptopDetailsComponent},
{path:'create-laptopbrand', component:CreateLaptopbrandComponent},
{path:'laptopbrand-list', component:LaptopbrandListComponent},
{path:'view-laptopbrand/:id', component:ViewLaptopbrandComponent},
{path:'update-laptopbrand/:id', component:UpdateLaptopbrandComponent},
{path:'inactive-laptos', component:InactiveLaptopsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
