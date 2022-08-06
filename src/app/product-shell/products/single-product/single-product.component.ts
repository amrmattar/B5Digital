import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  @Input() product: any;
  paymentFlag: boolean;

  constructor(private service: ProductService) {}

  ngOnInit(): void {}

  Payment(payStatus) {
    if (payStatus == 'add') {
      this.paymentFlag = true;
    } else {
      this.paymentFlag = false;
    }
    this.service.cart(payStatus);
  }
}
