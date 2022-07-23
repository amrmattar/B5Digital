import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './main-layout/side-menu/side-menu.component';
import { NavigationsComponent } from './main-layout/navigations/navigations.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './shared/components/single-product/single-product.component';
import { AboutHeaderComponent } from './main-layout/navigations/about-header/about-header.component';
import { SearchAndOrderComponent } from './main-layout/navigations/search-and-order/search-and-order.component';
import { StaticListComponent } from './main-layout/navigations/static-list/static-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    NavigationsComponent,
    FooterComponent,
    ProductsComponent,
    SingleProductComponent,
    AboutHeaderComponent,
    SearchAndOrderComponent,
    StaticListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
