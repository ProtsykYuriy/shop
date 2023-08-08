import { Component, Input } from '@angular/core';
import { ProductModel } from '../../interfaces/product-model';
import { CartService } from '../../../cart/services/cart.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss'],
})
export class ProductComponentComponent {
  @Input() product!: ProductModel;

  constructor(private readonly cartService: CartService) {}

  public onAddToCart(): void {
    this.cartService.cart$.pipe(take(1)).subscribe((cart) => {
      this.cartService.cart$.next([...cart, this.product.name]);
    });
  }
}
