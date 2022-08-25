import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FetchdataService {
  private baseUrl="http://localhost:8081";

  constructor(private http: HttpClient) {
    
   }
   getData() {
     return this.http.get(`${this.baseUrl}/customer`);
    }

}