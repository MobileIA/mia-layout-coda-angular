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
      }
  ];
  }

  ngOnInit(): void {
  }

}
