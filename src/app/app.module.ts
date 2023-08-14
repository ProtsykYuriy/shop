import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first/first-component/first-component.component';
import { ProductComponentComponent } from './products/components/product-component/product-component.component';
import { ProductListComponentComponent } from './products/components/product-list-component/product-list-component.component';
import { CartListComponentComponent } from './cart/components/cart-list-component/cart-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    // лишний суффикс Component в названии компонента - убираем
    FirstComponentComponent,
    ProductComponentComponent,
    ProductListComponentComponent,
    CartListComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
