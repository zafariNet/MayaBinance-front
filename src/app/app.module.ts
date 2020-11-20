import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AccountModule } from './modules/account/account.module';
import { MainModule } from './modules/main/main.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AccountModule,
    RouterModule.forRoot([]),
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
