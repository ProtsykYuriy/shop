import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
