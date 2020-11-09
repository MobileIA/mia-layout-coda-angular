/* Librerias */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FlexLayoutModule } from '@angular/flex-layout';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AngularEditorModule } from '@kolkov/angular-editor';
/* Material Design */
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
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
import { CodaFormModalComponent } from './modals/coda-form-modal/coda-form-modal.component';
import { AddressFieldComponent } from './fields/address-field/address-field.component';
import { CustomFieldComponent } from './fields/custom-field/custom-field.component';
import { TextFieldComponent } from './fields/text-field/text-field.component';
import { RecoveryPageComponent } from './pages/recovery-page/recovery-page.component';
import { MultiCheckboxFieldComponent } from './fields/multi-checkbox-field/multi-checkbox-field.component';
import { ActionsColumnComponent } from './columns/actions-column/actions-column.component';
import { BaseColumnComponent } from './columns/base-column/base-column.component';
import { CustomColumnComponent } from './columns/custom-column/custom-column.component';
import { ColumnFieldComponent } from './fields/column-field/column-field.component';
import { HtmlFieldComponent } from './fields/html-field/html-field.component';
import { PhotoFieldComponent } from './fields/photo-field/photo-field.component';


@NgModule({
  declarations: [LayoutCodaComponent, LoginPageComponent, CodaToolbarComponent, CodaSidebarComponent, CodaTableComponent, CodaMainLayoutComponent, CodaFormComponent, StringFieldComponent, BaseFieldComponent, RowFieldComponent, SelectFieldComponent, FileFieldComponent, CodaFormModalComponent, AddressFieldComponent, CustomFieldComponent, TextFieldComponent, RecoveryPageComponent, MultiCheckboxFieldComponent, ActionsColumnComponent, BaseColumnComponent, CustomColumnComponent, ColumnFieldComponent, HtmlFieldComponent, PhotoFieldComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    GooglePlaceModule,
    FlexLayoutModule,
    SweetAlert2Module,
    AngularEditorModule,

    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTreeModule,
    MatMenuModule,
    MatBadgeModule,
    MatExpansionModule,
    MatTooltipModule,
    MatAutocompleteModule
  ],
  exports: [
    FormsModule,
    GooglePlaceModule,
    AngularEditorModule,

    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatAutocompleteModule,

    LayoutCodaComponent,
    CodaSidebarComponent,
    CodaMainLayoutComponent,
    CodaTableComponent,
    BaseFieldComponent,
    CodaFormComponent,
    CodaFormModalComponent
  ],
  entryComponents: [
    CodaFormModalComponent
  ]
})
export class LayoutCodaModule { }
