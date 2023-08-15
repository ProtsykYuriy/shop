import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  cart$!: BehaviorSubject<string[]>;

  constructor(private readonly cartService: CartService) {}
  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }
}
