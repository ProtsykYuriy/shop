import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../interfaces/product-model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  products!: ProductModel[];

  constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService,
  ) {};

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  public addProductToCart (product: ProductModel) {
    this.cartService.addProductToCart(product);
  }
}