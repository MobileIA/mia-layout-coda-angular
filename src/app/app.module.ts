import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

import { SystemComponent } from './system/system.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutCodaModule } from 'projects/mobileia/layout-coda/src/public-api';
import { AuthenticationModule } from '@mobileia/authentication';

import { MatTableModule } from '@angular/material/table';
import { ProductAddComponent } from './pages/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    DashboardComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AuthenticationModule.forRoot({apiKey: '', isInternal: true, baseUrlInternal: ''}),
    LayoutCodaModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
