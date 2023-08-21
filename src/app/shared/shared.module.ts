import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    HighlightDirective
  ],
  imports: [BrowserModule],
  exports: [HighlightDirective],
  providers: [],
})
export class SharedModule {}
