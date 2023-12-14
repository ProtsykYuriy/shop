import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CartListComponent } from './cart/components/cart-list-component/cart-list.component';
import { ProductListComponent } from './products/components/product-list-component/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, CartListComponent, ProductListComponent]
})
export class AppComponent implements AfterViewInit {
  title = 'My awasome shop';

  @ViewChild('appTitle') appTitle!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setTitle();
  }

  setTitle() {
    this.renderer.setProperty(this.appTitle.nativeElement, 'innerHTML', this.title);
    this.renderer.addClass(this.appTitle.nativeElement, 'shop-title');
  }
}
