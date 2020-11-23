import {
  AfterViewInit,
  Component,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppBaseComponent } from 'src/app/shared/appComponentBase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent
  extends AppBaseComponent
  implements OnInit, AfterViewInit {
  @ViewChild('loginForm') loginForm: NgForm;
  saving=false;
  constructor(private injector: Injector) {
    super(injector);
  }
  ngAfterViewInit(): void {
    this.loginForm.reset();
  }
  ngOnInit(): void {}
  login(form: NgForm) {
    this.saving=true;
    console.log(form.value);
    setTimeout(() => {
      this.saving=false;
    }, 3000);

    form.reset();
  }
}
