import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent} from './first/first-component/first.component';
import { ProductComponent } from './products/components/product-component/product.component';
import { ProductListComponent } from './products/components/product-list-component/product-list.component';
import { CartListComponent } from './cart/components/cart-list-component/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
