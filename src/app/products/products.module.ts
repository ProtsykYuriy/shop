import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './components/product-component/product.component';
import { ProductListComponent } from './components/product-list-component/product-list.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [ProductListComponent],
  providers: [],
})
export class ProductsModule { }
