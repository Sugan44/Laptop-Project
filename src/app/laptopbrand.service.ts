import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { LaptopBrand } from './laptopbrand';
import { NgStyle } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LaptopbrandService {
  private baseUrl2="http://localhost:8080/brand/LaptopBrand";
  private baseUrl3="http://localhost:8080/brand/ActiveBrand";
  private baseUrl4="http://localhost:8080/brand/getBrandCode";
  

  constructor(private httpClient:HttpClient) { }

  /* --------------------- LAPTOP BRAND -------------------------------> */

  addLaptopBrand(laptopbrand:LaptopBrand):Observable<object> {
    return this.httpClient.post(`${this.baseUrl2}`, laptopbrand);
  }

  getallbrand():Observable<LaptopBrand[]>{
    return this.httpClient.get<LaptopBrand[]>(`${this.baseUrl2}`);  
  }

  getById(id:number):Observable<LaptopBrand> {
    return this.httpClient.get<LaptopBrand>(`${this.baseUrl2}/${id}`);
  }

  deleteById(id:number):Observable<object> {
    return this.httpClient.delete<object>(`${this.baseUrl2}/${id}`)
  }

  updateById(id:number, laptopbrand:LaptopBrand):Observable<object> {
    return this.httpClient.put(`${this.baseUrl2}/${id}`,laptopbrand)
  }
 /* --------------------- BRAND DropDown-------------------------------> */

  getActiveBrands():Observable<LaptopBrand[]> {
    return this.httpClient.get<LaptopBrand[]>(`${this.baseUrl3}`);
  }

  getBrandCode(name:string):Observable<any> {
    return this.httpClient.get(`${this.baseUrl4}/${name}`,{responseType: 'text'});
  }
  
 
}
