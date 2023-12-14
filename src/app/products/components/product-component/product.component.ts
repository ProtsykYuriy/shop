import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../interfaces/product-model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ProductComponent {
  @Input() product!: ProductModel;
  @Output() addToCart = new EventEmitter<ProductModel>();

  public onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
