# MiaLayoutCoda

## Instalación
1. Instalar libreria:
```bash
ng add @angular/material
npm install @angular/flex-layout --save
npm install @mobileia/layout-coda --save
```
2. Agregar modulo:
```ts
@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    LayoutCodaModule
  ]
})
export class CoreModule { }
```
3. Configuración de AppComponent:
```html
<router-outlet></router-outlet>

<swal #reserveSuccess title="Se ha enviado correctamente!" text="En breve nos pondremos en contacto, muchas gracias!" type="success">
</swal>
<swal #reserveError title="Se ha enviado correctamente!" text="En breve nos pondremos en contacto, muchas gracias!" type="error">
</swal>
```
4. Crear componente del sistema:
```bash
ng g c pages/system
```
5. Agregar ruta de System:
```ts
{
    path: '',
    component: SystemComponent,
    children: [
        { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
},
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
