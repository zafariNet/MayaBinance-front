import { AfterViewInit, Component } from '@angular/core';
declare var $: any;
@Component({
  templateUrl: './account.component.html',
})
export class AccountComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $('body').removeClass('sidebar-mini rtl dark skin-info');
    $('body').addClass('bg-img rtl');
    $('body').addClass('hold-transition');
    $('body').css('background-image', ': url(../../images/gallery/full/6.jpg)');
  }
}
