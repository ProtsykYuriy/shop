import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../interfaces/cart-item.interface';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnInit {
  cart$!: BehaviorSubject<CartItem[]>;
  totalCost$!: BehaviorSubject<number>;
  totalQuantity$!: BehaviorSubject<number>;

  constructor(private readonly cartService: CartService) {}
  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
    this.totalCost$ = this.cartService.totalCost$;
    this.totalQuantity$ = this.cartService.totalQuantity$;
  }

  addItem(cartItem: CartItem): void {
    this.cartService.addProductToCart(cartItem);
  }

  substractItem(cartItem: CartItem): void {
    this.cartService.substractProductFromCart(cartItem);
  }

  removeItem(cartItem: CartItem): void {
    this.cartService.removeSimilarProducts(cartItem);
  }
}
