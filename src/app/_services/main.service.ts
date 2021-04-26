import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable}from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyMainService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('../../../assets/data/products.json')
    .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res;
    return body;
  }

}