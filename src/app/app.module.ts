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

@NgModule({
  declarations: [
    AppComponent,
    CreateLaptopComponent,
    LaptopListComponent,
    LaptopDetailsComponent,
    UpdateLaptopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
