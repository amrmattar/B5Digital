import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'https://dummyjson.com';
  orders: number = 0;

  constructor(private http: HttpClient) {}

  cart(updatedData) {
    if (updatedData == 'add') {
      this.orders++;
    } else {
      this.orders--;
    }
  }

  getproducts(prductsNum): Observable<any> {
    return this.http
      .get(this.baseUrl + environment.API.Products, {
        params: { limit: prductsNum },
      })
      .pipe(take(1));
  }
}
