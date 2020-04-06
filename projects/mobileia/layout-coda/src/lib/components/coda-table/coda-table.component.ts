import { Component, OnInit, Input } from '@angular/core';
import { CodaTableConfig } from '../../entities/coda-table-config';
import { ApiPagination } from '@mobileia/core';
import { CodaColumnConfig } from '../../entities/coda-column-config';

@Component({
  selector: 'coda-table',
  templateUrl: './coda-table.component.html',
  styleUrls: ['./coda-table.component.scss']
})
export class CodaTableComponent implements OnInit {

  @Input() tableConfig: CodaTableConfig;
  dataItems = new ApiPagination<any>();

  constructor() {
    // Borrar esto
    this.dataItems.current_page = 1;
    this.dataItems.total = 10;
    this.dataItems.data = [
      {id: 1, title: 'uno', name: 'Categoria' },
      {id: 2, title: 'uno2', name: 'Categoria2'},
      {id: 3, title: 'uno3', name: 'Categoria3'},
      {id: 4, title: 'uno4', name: 'Categoria4'},
      {id: 5, title: 'uno5', name: 'Categoria5'},
      {id: 6, title: 'uno6', name: 'Categoria6'},
    ];
  }

  ngOnInit(): void {
  }

  getDisplayColumns(): Array<String> {
    let columns = new Array<String>();
    for (const column of this.tableConfig.columns) {
      columns.push(column.key);
    }
    return columns;
  }

  getLinkUrl(column: CodaColumnConfig, item) {
    let url = column.url;
    for (const fieldKey of column.fields_url) {
      url = url.replace(':' + fieldKey, item[fieldKey]);
    }
    return [url];
  }
}
