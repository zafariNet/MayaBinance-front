import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit,AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    $('body').addClass('sidebar-mini rtl dark skin-info');
    $('body').removeClass('bg-img');
  }

  ngOnInit(): void {
  }

}
