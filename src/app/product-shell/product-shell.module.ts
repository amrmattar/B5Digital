import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';
import { TruncatePipe } from './truncate.pipe';

const productRoutes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [ProductsComponent, SingleProductComponent, TruncatePipe],
  imports: [
    RouterModule.forChild(productRoutes),
    CommonModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductShellModule {}
