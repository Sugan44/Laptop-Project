import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateLaptopComponent } from './create-laptop/create-laptop.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';
import { CreateLaptopbrandComponent } from './create-laptopbrand/create-laptopbrand.component';
import { LaptopbrandListComponent } from './laptopbrand-list/laptopbrand-list.component';
import { ViewLaptopbrandComponent } from './view-laptopbrand/view-laptopbrand.component';
import { UpdateLaptopbrandComponent } from './update-laptopbrand/update-laptopbrand.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import {NgConfirmModule} from 'ng-confirm-box';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { InactiveLaptopsComponent } from './inactive-laptops/inactive-laptops.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateLaptopComponent,
    LaptopListComponent,
    LaptopDetailsComponent,
    UpdateLaptopComponent,
    CreateLaptopbrandComponent,
    LaptopbrandListComponent,
    ViewLaptopbrandComponent,
    UpdateLaptopbrandComponent,
    HomeComponent,
    InactiveLaptopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    NgConfirmModule,
    Ng2OrderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
