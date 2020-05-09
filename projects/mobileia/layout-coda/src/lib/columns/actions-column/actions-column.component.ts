import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseColumnComponent } from '../base-column/base-column.component';
import { Router } from '@angular/router';

@Component({
  selector: 'coda-actions-column',
  templateUrl: './actions-column.component.html',
  styleUrls: ['./actions-column.component.scss']
})
export class ActionsColumnComponent extends BaseColumnComponent implements OnInit {

  @Output() removeItem = new EventEmitter<any>();

  constructor(
    protected navigator: Router
  ) {
    super()
  }

  ngOnInit(): void {
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

  onRemoveItem(item) {
    this.removeItem.emit(item);
  }
}
