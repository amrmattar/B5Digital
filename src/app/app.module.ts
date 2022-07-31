import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './main-layout/side-menu/side-menu.component';
import { NavigationsComponent } from './main-layout/navigations/navigations.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { AboutHeaderComponent } from './main-layout/navigations/about-header/about-header.component';
import { SearchAndOrderComponent } from './main-layout/navigations/search-and-order/search-and-order.component';
import { StaticListComponent } from './main-layout/navigations/static-list/static-list.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TruncatePipe } from './product-shell/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    NavigationsComponent,
    FooterComponent,
    AboutHeaderComponent,
    SearchAndOrderComponent,
    StaticListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
