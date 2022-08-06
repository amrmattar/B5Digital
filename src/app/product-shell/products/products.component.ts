import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  defaultNum: number = 10;
  @ViewChild('dialogContentForScroll') dialogContent: ElementRef;
  scrollPosition: number;
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

    this.productService.getproducts(this.defaultNum).subscribe((res) => {
      this.products = res.products;
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

  ngAfterViewInit(): void {
    let dialogElement = this.dialogContent.nativeElement as HTMLElement;
    dialogElement.onscroll = () => {
      if (dialogElement.scrollTop > 380 && dialogElement.scrollTop < 500) {
        this.defaultNum = 20;
        this.ngOnInit();
      } else if (dialogElement.scrollTop > 1100) {
        this.defaultNum = 30;
        this.ngOnInit();
      }
      this.scrollPosition = dialogElement.scrollTop;
    };
  }
  checkChanged(): void {
    this.store.dispatch({ type: '[Product] Toggle Product Code' });
  }
}
