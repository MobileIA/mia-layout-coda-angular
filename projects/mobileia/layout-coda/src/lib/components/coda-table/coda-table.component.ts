import { Component, OnInit, Input } from '@angular/core';
import { CodaTableConfig } from '../../entities/coda-table-config';
import { ApiPagination } from '@mobileia/core';

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
      {title: 'uno'},
      {title: 'uno2'},
      {title: 'uno3'},
      {title: 'uno4'},
      {title: 'uno5'},
      {title: 'uno6'},
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
}
