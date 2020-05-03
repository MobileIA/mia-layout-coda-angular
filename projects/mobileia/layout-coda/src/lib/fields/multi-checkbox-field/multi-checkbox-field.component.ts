import { Component, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field/base-field.component';

@Component({
  selector: 'coda-multi-checkbox-field',
  templateUrl: './multi-checkbox-field.component.html',
  styleUrls: ['./multi-checkbox-field.component.scss']
})
export class MultiCheckboxFieldComponent extends BaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onChangeValue() {
    let values = [];

    for (const option of this.field.options) {
      if (option.checked) {
        values.push(option.value);
      }
    }

    this.item[this.field.key] = values;
  }
}
