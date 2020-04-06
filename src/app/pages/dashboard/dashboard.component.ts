import { Component, OnInit } from '@angular/core';
import { CodaTableConfig } from 'projects/mobileia/layout-coda/src/public-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tableConfig = new CodaTableConfig();

  constructor() {
    this.tableConfig.columns = [
      {
        key: 'checkbox',
        field_key: '',
        type: 'checkbox',
        title: ''
      },
      {
        key: 'name',
        field_key: 'name',
        type: 'link',
        title: 'Categoria',
        url: '/category/:id',
        fields_url: ['id']
      },
      {
        key: 'title',
        field_key: 'title',
        type: 'string',
        title: 'Titulo'
      },
      {
        key: 'price',
        field_key: 'price',
        type: 'money',
        title: 'Total'
      },
      {
        key: 'status',
        field_key: 'status',
        type: 'select',
        title: 'Estado',
        options: [
          { value: 0, title: 'Pendiente'},
          { value: 1, title: 'Activo'},
        ]
      }
  ];
  }

  ngOnInit(): void {
    this.configSelectors();
  }

  configSelectors() {
    this.tableConfig.onChangeField.subscribe(data => {
      console.log(data);
    });
  }
}
