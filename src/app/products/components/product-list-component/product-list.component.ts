import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../interfaces/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: ProductModel[];

  constructor(private readonly productService: ProductService) {};

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
