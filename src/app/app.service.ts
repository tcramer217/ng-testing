import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getPublicApis(): Observable<ApiEntry[]> {
    return this.http.get('https://mockyard.herokuapp.com/products') as Observable<ApiEntry[]>;
  }
}

export interface ApiEntry {
  id:number;
  name:string;
  image:string;
  price:string;
  description:string;
  category:string;
  createdAt:string;
  productId:number;
}
