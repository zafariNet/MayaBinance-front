import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonBusyDirective } from './directives/button-busy.directive';
@NgModule({
  declarations: [ButtonBusyDirective],
  imports: [
    BrowserModule
  ],
  exports:[ButtonBusyDirective],
})
export class SharedModule {}

