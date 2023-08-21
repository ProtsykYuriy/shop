import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CartItemComponent } from './components/cart-item-component.ts/cart-item.component';
import { CartListComponent } from './components/cart-list-component/cart-list.component';

import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    SharedModule,
  ],
  exports: [
    CartListComponent,
  ],
  providers: [],
})
export class CartModule { }
