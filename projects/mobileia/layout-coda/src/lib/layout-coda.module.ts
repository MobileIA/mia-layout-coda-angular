/* Librerias */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from '@mobileia/authentication';
/* Material Design */
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
/* Componente internos */
import { LayoutCodaComponent } from './layout-coda.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CodaToolbarComponent } from './components/coda-toolbar/coda-toolbar.component';
import { CodaSidebarComponent } from './components/coda-sidebar/coda-sidebar.component';
import { CodaTableComponent } from './components/coda-table/coda-table.component';
import { CodaMainLayoutComponent } from './pages/coda-main-layout/coda-main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutCodaComponent, LoginPageComponent, CodaToolbarComponent, CodaSidebarComponent, CodaTableComponent, CodaMainLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AuthenticationModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatPaginatorModule,
    LayoutCodaComponent,
    CodaSidebarComponent,
    CodaMainLayoutComponent,
    CodaTableComponent
  ]
})
export class LayoutCodaModule { }
