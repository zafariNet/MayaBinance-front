import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export abstract class AppBaseComponent {
  translate: TranslateService;
  constructor(injector: Injector) {
    this.translate = injector.get(TranslateService);
    this.translate.addLangs(['en', 'fa']);
    this.translate.setDefaultLang('fa');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  l(key: string) {
    let translated;
    this.translate.get(key).subscribe((response) => {
      translated = response;
    });
    return translated;
  }
}
