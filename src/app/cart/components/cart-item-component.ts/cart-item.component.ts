import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CartItem } from '../../interfaces/cart-item.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  @Output() addItem = new EventEmitter<CartItem>();
  @Output() substractItem = new EventEmitter<CartItem>();
  @Output() removeItem = new EventEmitter<CartItem>();

  onAddItem(): void {
    this.addItem.emit(this.cartItem);
  }

  onSubstractItem(): void {
    this.substractItem.emit(this.cartItem);
  }

  onRemoveItem(): void {
    this.removeItem.emit(this.cartItem);
  }
}
