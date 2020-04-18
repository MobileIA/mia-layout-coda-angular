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

  isLoading = true;

  constructor() {
  }

  ngOnInit(): void {
    this.loadItems();
  }
  
  onRemoveItem(item) {
    this.tableConfig.service.remove(item.id).toPromise().then(data => {
      this.loadItems();
    });
  }

  loadItems() {
    // No comitear
    this.dataItems.data = [
      { title: 'uno', name:' ñkljasd' },
      { title: 'uno2', type: 'asdasd', string: 'asdzxczxc' },
      { title: 'uno3', options: 'asd' },
      { title: 'uno4' },
      { title: 'uno5' },
      { title: 'uno6' },
    ];
  // No comitear

    this.isLoading = true;
    this.tableConfig.service.fetchList(this.tableConfig.params).toPromise().then(data => {
      this.isLoading = false;
      if (!data.success) {
        return;
      }
      this.dataItems = data.response;
      // Procesar si se necesita
      this.dataItems.data = this.tableConfig.onAfterLoad(this.dataItems.data);
    });
  }

  onClickOrder(column: CodaColumnConfig) {
    // Verificar si se puede ordenar esta columna
    if (!column.is_order) {
      return;
    }
    // Limpiar todas las columnas
    this.tableConfig.columns.forEach(el => {
      if (el.field_key != column.field_key) {
        el.order_type = undefined;
      }
    });

    if (column.order_type == undefined) {
      column.order_type = 1; // Asc
      this.tableConfig.params.ordType = { title: column.field_key, asc: 0 };
    } else if (column.order_type == 1) {
      column.order_type = 2; // DESC
      this.tableConfig.params.ordType = { title: column.field_key, asc: 1 };
    } else if (column.order_type == 2) {
      column.order_type = undefined;
      this.tableConfig.params.ordType = { title: '', asc: 0 };
    }
    this.loadItems();
  }

  onPageChange(event: PageEvent) {
    this.tableConfig.params.itemPerPage = event.pageSize;
    this.tableConfig.params.pageCurrent = event.pageIndex + 1;
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
