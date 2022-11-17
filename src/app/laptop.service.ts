import { Injectable } from '@angular/core';
import { Laptop } from './laptop';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private baseUrl1="http://localhost:8080/api/laptop";
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

}
