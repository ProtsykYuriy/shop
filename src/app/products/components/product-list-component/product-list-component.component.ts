import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../interfaces/product-model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss'],
})
export class ProductListComponentComponent implements OnInit {
  products!: ProductModel[];

  constructor(private readonly productService: ProductService) {};

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
