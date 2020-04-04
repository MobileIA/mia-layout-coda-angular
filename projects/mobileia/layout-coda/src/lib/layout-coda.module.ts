/* Librerias */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from '@mobileia/authentication';
/* Material Design */
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
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
import { RowFieldComponent } from './fields/row-field/row-field.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';
import { FileFieldComponent } from './fields/file-field/file-field.component';

@NgModule({
  declarations: [LayoutCodaComponent, LoginPageComponent, CodaToolbarComponent, CodaSidebarComponent, CodaTableComponent, CodaMainLayoutComponent, CodaFormComponent, StringFieldComponent, BaseFieldComponent, RowFieldComponent, SelectFieldComponent, FileFieldComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AuthenticationModule,

    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    FormsModule,

    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,

    LayoutCodaComponent,
    CodaSidebarComponent,
    CodaMainLayoutComponent,
    CodaTableComponent,
    CodaFormComponent
  ]
})
export class LayoutCodaModule { }
