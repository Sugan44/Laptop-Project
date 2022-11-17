import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLaptopComponent } from './create-laptop/create-laptop.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';

const routes: Routes = [
{path:'create-laptop',component:CreateLaptopComponent},
{path:'laptop-list', component:LaptopListComponent},
{path:'update-laptop/:id', component:UpdateLaptopComponent},
{path:'laptop-details/:id', component:LaptopDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
