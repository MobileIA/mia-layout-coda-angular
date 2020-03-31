import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from 'projects/mobileia/layout-coda/src/lib/pages/login-page/login-page.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      config: {}
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
