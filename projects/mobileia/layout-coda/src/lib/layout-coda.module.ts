/* Librerias */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from '@mobileia/authentication';
/* Material Design */
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
/* Componente internos */
import { LayoutCodaComponent } from './layout-coda.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CodaToolbarComponent } from './components/coda-toolbar/coda-toolbar.component';
import { CodaSidebarComponent } from './components/coda-sidebar/coda-sidebar.component';
import { CodaTableComponent } from './components/coda-table/coda-table.component';
import { CodaMainLayoutComponent } from './pages/coda-main-layout/coda-main-layout.component';
import { RouterModule } from '@angular/router';
import { CodaFormComponent } from './components/coda-form/coda-form.component';
import { StringFieldComponent } from './fields/string-field/string-field.component';
import { BaseFieldComponent } from './fields/base-field/base-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutCodaComponent, LoginPageComponent, CodaToolbarComponent, CodaSidebarComponent, CodaTableComponent, CodaMainLayoutComponent, CodaFormComponent, StringFieldComponent, BaseFieldComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AuthenticationModule,

    MatTableModule,
    MatPaginatorModule,
    MatInputModule
  ],
  exports: [
    FormsModule,

    MatPaginatorModule,
    MatInputModule,

    LayoutCodaComponent,
    CodaSidebarComponent,
    CodaMainLayoutComponent,
    CodaTableComponent,
    CodaFormComponent
  ]
})
export class LayoutCodaModule { }
