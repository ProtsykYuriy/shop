import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.scss'],
})
export class CartListComponentComponent implements OnInit {
  cart$!: BehaviorSubject<string[]>;

  constructor(private readonly cartService: CartService) {}
  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }
}
