import { Injectable } from '@angular/core';
import { ProductModel } from '../interfaces/product-model';
import { ProductCategory } from '../../shared/enums/product-category.enum';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): ProductModel[] {
    return [
      {
        name: 'Bread',
        description:
          'Bread is a food consisting of flour or meal that is moistened, kneaded into dough, and often fermented using yeast.',
        price: 34,
        category: ProductCategory.food,
        isAvailable: true,
      },
      {
        name: 'Milk',
        description:
          'Milk is the liquid produced by the mammary glands of mammals, including humans.',
        price: 52,
        category: ProductCategory.drinks,
        isAvailable: true,
      },
      {
        name: 'Butter',
        description:
          'Butter is a dairy product made from separating whole milk or cream into fat and buttermilk.',
        price: 64,
        category: ProductCategory.food,
        isAvailable: true,
      },
      {
        name: 'Potatoes',
        description:
          'The potato is a tuber, round or oval, with small white roots called " eyes", that are growth buds.',
        price: 23,
        category: ProductCategory.food,
        isAvailable: false,
      },
    ];
  }
}
