import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { HttpService } from '../services/http/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'https://dummyjson.com';
  private productsUrl = 'api/products';
  private products: Product[];

  // private selectedProductSource = new BehaviorSubject<Product | null>(null);
  // selectedProductChanges$ = this.selectedProductSource.asObservable();

  constructor(private http: HttpClient) {}

  // changeSelectedProduct(selectedProduct: Product | null): void {
  //   this.selectedProductSource.next(selectedProduct);
  // }

  getproducts(): Observable<any> {
    return this.http.get(this.baseUrl + environment.API.Products).pipe(take(1));
  }

  // getproducts(): Observable<any> {
  //   return this.http.get(environment.API.Products);
  // }
}
