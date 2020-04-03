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
