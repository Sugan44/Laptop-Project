import { Injectable } from '@angular/core';
import { Laptop } from './laptop';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { LaptopBrand } from './laptopbrand';


@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private baseUrl1="http://localhost:8080/api/laptop";
  private baseUrl2="http://localhost:8080/api/getActiveLaptopList";
  private baseUrl3="http://localhost:8080/api/makeLaptopInactive";
  private baseUrl4="http://localhost:8080/api/makeLaptopActive";
  private baseUrl5="http://localhost:8080/api/getInActiveLaptopList";
  
  constructor(private httpClient:HttpClient) { }

  addlaptop(laptop:Laptop):Observable<object>{
    return this.httpClient.post(`${this.baseUrl1}`,laptop);
  }

  getValues():Observable<Laptop[]>{
    return this.httpClient.get<Laptop[]>(`${this.baseUrl1}`);
  }

  getById(id:number):Observable<Laptop>{
    return this.httpClient.get<Laptop>(`${this.baseUrl1}/${id}`);
  }

  deleteById(id:number):Observable<object> {
    return this.httpClient.delete(`${this.baseUrl1 }/${id}`)
  }

  updateById(id:number, laptop:Laptop):Observable<Object> {
    return this.httpClient.put(`${this.baseUrl1}/${id}`,laptop)
  }

  getActiveLaptopList():Observable<Laptop[]> {
    return this.httpClient.get<Laptop[]> (`${this.baseUrl2}`);
  }

  getInActiveLaptopList():Observable<Laptop[]> {
    return this.httpClient.get<Laptop[]> (`${this.baseUrl5}`);
  }
  
  makeLaptopInactive(id:number):Observable<object> {
    return this.httpClient.delete(`${this.baseUrl3}/${id}`);
  }

  makeLaptopActive(id:number):Observable<object> {
    return this.httpClient.delete(`${this.baseUrl4}/${id}`);
  }
}
