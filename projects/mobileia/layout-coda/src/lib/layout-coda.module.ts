import { NgModule } from '@angular/core';
import { LayoutCodaComponent } from './layout-coda.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';



@NgModule({
  declarations: [LayoutCodaComponent, LoginPageComponent],
  imports: [
  ],
  exports: [LayoutCodaComponent]
})
export class LayoutCodaModule { }
