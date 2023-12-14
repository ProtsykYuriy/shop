import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CartItem } from '../../interfaces/cart-item.interface';
import { MatIconModule } from '@angular/material/icon';
import { HighlightDirective } from '../../../shared/directives/highlight.directive';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule, HighlightDirective]
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
