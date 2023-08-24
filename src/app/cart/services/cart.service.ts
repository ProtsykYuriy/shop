import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, take } from 'rxjs';
import { ProductModel } from '../../products/interfaces/product-model';
import { CartItem } from '../interfaces/cart-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$ = new BehaviorSubject<CartItem[]>([]);
  totalCost$ = new BehaviorSubject<number>(0);
  totalQuantity$ = new BehaviorSubject<number>(0);

  addProductToCart(product: ProductModel | CartItem) {
    // в чем суть этого объединения?
    combineLatest([this.cart$, this.totalCost$, this.totalQuantity$])
      .pipe(take(1))
      .subscribe(([cart, totalCost, totalQuantity]) => {
        this.totalCost$.next(totalCost + product.price);
        this.totalQuantity$.next(totalQuantity + 1);
        this.cart$.next(this.onQuantityIncrease(cart, product));
      });
  }

  substractProductFromCart(product: ProductModel | CartItem) {
    combineLatest([this.cart$, this.totalCost$, this.totalQuantity$])
      .pipe(take(1))
      .subscribe(([cart, totalCost, totalQuantity]) => {
        this.totalCost$.next(totalCost - product.price);
        this.totalQuantity$.next(totalQuantity - 1);
        this.cart$.next(this.onQuantityDecrease(cart, product));
      });
  }

  removeSimilarProducts(product: CartItem) {
    combineLatest([this.cart$, this.totalCost$, this.totalQuantity$])
      .pipe(take(1))
      .subscribe(([cart, totalCost, totalQuantity]) => {
        const similarProductsValue = product.quantity * product.price;

        this.totalCost$.next(totalCost - similarProductsValue);
        this.totalQuantity$.next(totalQuantity - product.quantity);
        this.cart$.next(this.onProductsRemoved(cart, product));
      });
  }

  private onQuantityIncrease(
    cart: CartItem[],
    product: ProductModel | CartItem
  ) {
    const cartItemIndex = cart.findIndex((item) => item.name === product.name);

    if (cartItemIndex > -1) {
      const cartItem = { ...cart[cartItemIndex] };
      const updatedCartItem = {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      };
      return [
        ...cart.slice(0, cartItemIndex),
        updatedCartItem,
        ...cart.slice(cartItemIndex + 1),
      ];
    }

    return [
      ...cart,
      {
        name: product.name,
        price: product.price,
        quantity: 1,
      },
    ];
  }

  private onQuantityDecrease(
    cart: CartItem[],
    product: ProductModel | CartItem
  ) {
    const cartItemIndex = cart.findIndex((item) => item.name === product.name);
    const cartItem = { ...cart[cartItemIndex] };

    if (cartItem.quantity === 1) {
      return [
        ...cart.slice(0, cartItemIndex),
        ...cart.slice(cartItemIndex + 1),
      ];
    }

    const updatedCartItem = {
      ...cartItem,
      quantity: cartItem.quantity - 1,
    };

    return [
      ...cart.slice(0, cartItemIndex),
      updatedCartItem,
      ...cart.slice(cartItemIndex + 1),
    ];
  }

  private onProductsRemoved(
    cart: CartItem[],
    product: ProductModel | CartItem
  ) {
    const cartItemIndex = cart.findIndex((item) => item.name === product.name);

    return [...cart.slice(0, cartItemIndex), ...cart.slice(cartItemIndex + 1)];
  }
}
