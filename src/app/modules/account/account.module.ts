import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
