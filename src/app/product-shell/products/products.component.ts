import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { getProducts } from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  flag: boolean;
  sub: Subscription;
  selectedProduct: Product | null;
  products: Product[];
  errorMessage: string;
  products$: Observable<Product[]>;

  constructor(
    private store: Store<any>,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // this.sub = this.productService.selectedProductChanges$.subscribe(
    //   (currentProduct) => (this.selectedProduct = currentProduct)
    // );
    // this.products$ = this.store.select(getProducts);

    // this.store.dispatch(ProductActions.loadProducts());

    // setTimeout(() => {
    //   console.log(this.products$.subscribe((res) => console.log(res)));
    // }, 1000);

    this.productService.getproducts().subscribe((res) => {
      this.products = res.products;
      console.log(this.products);
    });
    // this.productService.getProducts().subscribe({
    //   next: (products: Product[]) => (this.products = products),
    //   error: (err) => (this.errorMessage = err),
    // });

    // this.store.select('products').subscribe((products) => {
    //   if (products) {
    //     this.flag = products.showProductCode;
    //   }
    // });
  }

  checkChanged(): void {
    this.store.dispatch({ type: '[Product] Toggle Product Code' });
  }
}
