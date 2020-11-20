import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { SideBarComponent } from 'src/app/layout/side-bar/side-bar.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { BreadcrumbComponent } from 'src/app/layout/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
HeaderComponent,
SideBarComponent,
BreadcrumbComponent,
FooterComponent,
  MainComponent
],
  imports: [
    BrowserModule,
    MainRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
