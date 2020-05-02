import { Component, OnInit, Input } from '@angular/core';
import { CodaTableConfig } from '../../entities/coda-table-config';
import { ApiPagination, MIATableModel } from '@mobileia/core';
import { CodaColumnConfig } from '../../entities/coda-column-config';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'coda-table',
  templateUrl: './coda-table.component.html',
  styleUrls: ['./coda-table.component.scss']
})
export class CodaTableComponent implements OnInit {

  @Input() tableConfig: CodaTableConfig;
  dataItems = new ApiPagination<any>();

  isLoading = true;

  constructor(
    protected navigator: Router
  ) {
  }

  ngOnInit(): void {
    this.loadItems();
  }

  onClickItem(item) {
    this.tableConfig.onClickRow.next(item);
  }
  
  onRemoveItem(item) {
    this.tableConfig.service.remove(item.id).toPromise().then(data => {
      this.loadItems();
    });
  }

  loadItems() {
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

  getFieldValue(column, item): any {
    if (typeof column.field_key == 'string' && item[column.field_key] != undefined) {
      return item[column.field_key];
    }

    let valueFinal = item;
    for (const key of column.field_key) {
      if(valueFinal[key] == undefined){
        return;
      }
      valueFinal = valueFinal[key];
    }
    return valueFinal;
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

  onClickAction(event, column, act, item) {
    event.stopPropagation();

    if (act.subject != undefined) {
      act.subject.next(item);
      return;
    }

    let url = act.url;
    for (const fieldKey of column.fields_url) {
      url = url.replace(':' + fieldKey, item[fieldKey]);
    }
    if (url != undefined && url != '') {
      this.navigator.navigateByUrl(url);
    }
  }

  getLinkAction(column, act, item) {
    let url = act.url;
    for (const fieldKey of column.fields_url) {
      url = url.replace(':' + fieldKey, item[fieldKey]);
    }
    return [url];
  }

  getStyle(column, item) {
    if (column.colors == undefined) {
      return;
    }

    let value = this.getFieldValue(column, item);
    console.log(value);
    console.log(column.colors);
    if (column.colors[value] != undefined) {
      return {
        color: column.colors[value]
      }
    }
  }

  getMultiOption(column, item) {
    let value = '';

    for (const option of item[column.field_key]) {
      if (value != '') {
        value += ' - ';
      }
      value += column.options[option].title;
    }

    return value;
  }
}
