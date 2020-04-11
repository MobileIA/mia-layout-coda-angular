import { Component, OnInit, Input } from '@angular/core';
import { CodaTableConfig } from '../../entities/coda-table-config';
import { ApiPagination, MIATableModel } from '@mobileia/core';
import { CodaColumnConfig } from '../../entities/coda-column-config';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'coda-table',
  templateUrl: './coda-table.component.html',
  styleUrls: ['./coda-table.component.scss']
})
export class CodaTableComponent implements OnInit {

  @Input() tableConfig: CodaTableConfig;
  dataItems = new ApiPagination<any>();
  params = new MIATableModel();

  isLoading = true;

  constructor() {
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.isLoading = true;
    this.tableConfig.service.fetchList(this.params).toPromise().then(data => {
      this.isLoading = false;
      if (!data.success) {
        return;
      }
      this.dataItems = data.response;
      // Procesar si se necesita
      this.dataItems.data = this.tableConfig.onAfterLoad(this.dataItems.data);
    });
  }

  onPageChange(event: PageEvent) {
    this.params.itemPerPage = event.pageSize;
    this.params.pageCurrent = event.pageIndex + 1;
    this.loadItems();
  }

  onChangeSelectValue(column, item) {
    this.tableConfig.onChangeField.next({ column: column, item: item });
  }

  getDisplayColumns(): Array<String> {
    let columns = new Array<String>();
    for (const column of this.tableConfig.columns) {
      columns.push(column.key);
    }
    return columns;
  }

  getLinkUrl(column, item) {
    let url = column.url;
    for (const fieldKey of column.fields_url) {
      url = url.replace(':' + fieldKey, item[fieldKey]);
    }
    return [url];
  }

  getLinkAction(column, act, item) {
    let url = act.url;
    for (const fieldKey of column.fields_url) {
      url = url.replace(':' + fieldKey, item[fieldKey]);
    }
    return [url];
  }
}
