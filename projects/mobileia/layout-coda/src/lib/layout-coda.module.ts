/* Librerias */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '@mobileia/authentication';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
/* Material Design */
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
/* Componente internos */
import { LayoutCodaComponent } from './layout-coda.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CodaToolbarComponent } from './components/coda-toolbar/coda-toolbar.component';
import { CodaSidebarComponent } from './components/coda-sidebar/coda-sidebar.component';
import { CodaTableComponent } from './components/coda-table/coda-table.component';
import { CodaMainLayoutComponent } from './pages/coda-main-layout/coda-main-layout.component';
import { CodaFormComponent } from './components/coda-form/coda-form.component';
import { StringFieldComponent } from './fields/string-field/string-field.component';
import { BaseFieldComponent } from './fields/base-field/base-field.component';
import { RowFieldComponent } from './fields/row-field/row-field.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';
import { FileFieldComponent } from './fields/file-field/file-field.component';


@NgModule({
  declarations: [LayoutCodaComponent, LoginPageComponent, CodaToolbarComponent, CodaSidebarComponent, CodaTableComponent, CodaMainLayoutComponent, CodaFormComponent, StringFieldComponent, BaseFieldComponent, RowFieldComponent, SelectFieldComponent, FileFieldComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,

    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    FormsModule,

    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,

    LayoutCodaComponent,
    CodaSidebarComponent,
    CodaMainLayoutComponent,
    CodaTableComponent,
    CodaFormComponent
  ]
})
export class LayoutCodaModule { }
