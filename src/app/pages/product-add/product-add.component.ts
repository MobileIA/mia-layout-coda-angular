import { Component, OnInit } from '@angular/core';
import { CodaFormConfig } from 'projects/mobileia/layout-coda/src/lib/entities/coda-form-config';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  formConfig = new CodaFormConfig();

  constructor() {
    this.formConfig.fields = [
      {
        type: 'string',
        key: 'title',
        title: 'Titulo'
      },
      {
        type: 'string',
        key: ['category', 'name'],
        title: 'Categoria'
      }
    ];
    // Ejemplo de row
    this.formConfig.fields = [
      {
        type: 'row',
        key: 'row_1',
        title: '',
        children: [
          {
            type: 'string',
            key: 'title',
            title: 'Titulo'
          },
          {
            type: 'string',
            key: ['category', 'name'],
            title: 'Categoria'
          }
        ]
      },
      {
        type: 'select',
        key: 'status',
        title: '¿Estado?',
        caption: '',
        options: [
          {
            title: 'SI',
            value: 1
          },
          {
            title: 'NO',
            value: 0
          }
        ]
      }
    ];
    this.formConfig.item = {
      title: 'Producto de prueba',
      category: {
        name: 'Categoria 1'
      },
      status: 0
    }
  }

  ngOnInit(): void {
  }

  onClickSave() {
    console.log(this.formConfig.item);
  }
}
