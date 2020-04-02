import { NgModule } from '@angular/core';
import { LayoutCodaComponent } from './layout-coda.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CodaToolbarComponent } from './components/coda-toolbar/coda-toolbar.component';
import { CodaSidebarComponent } from './components/coda-sidebar/coda-sidebar.component';



@NgModule({
  declarations: [LayoutCodaComponent, LoginPageComponent, CodaToolbarComponent, CodaSidebarComponent],
  imports: [
  ],
  exports: [LayoutCodaComponent]
})
export class LayoutCodaModule { }
