import { Component } from '@angular/core';
import { ProductCategory } from '../../shared/enums/product-category.enum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  name!: string;
  description!: string;
  price!: number;
  category!: ProductCategory;
  isAvailable!: boolean
  types!: string[];
  originCounries!: string[];

}
