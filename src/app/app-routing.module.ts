import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from 'projects/mobileia/layout-coda/src/lib/pages/login-page/login-page.component';
import { CodaMainLayoutComponent } from 'projects/mobileia/layout-coda/src/lib/pages/coda-main-layout/coda-main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';


const routes: Routes = [
  {
    path: '',
    component: CodaMainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'product-add',
        component: ProductAddComponent
      }
    ]
  },
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
