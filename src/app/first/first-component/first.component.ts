import { Component } from '@angular/core';
import { ProductCategory } from '../../shared/enums/product-category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  name!: string;
  description!: string;
  price!: number;
  category!: ProductCategory;
  isAvailable!: boolean
  types!: string[];
  originCounries!: string[];

}
