import { Component, OnInit, Input } from '@angular/core';
import { CodaFieldConfig } from '../../entities/coda-field-config';

@Component({
  selector: 'coda-base-field',
  templateUrl: './base-field.component.html',
  styleUrls: ['./base-field.component.scss']
})
export class BaseFieldComponent implements OnInit {

  @Input() field: CodaFieldConfig;
  @Input() item: any;
  internalValue: any;

  constructor() { }

  ngOnInit(): void {
    // Asignar valor actual
    this.loadValue();
  }

  sendChange() {
    if(this.field.changeValue == undefined || this.field.changeValue == null){
      return;
    }
    this.field.changeValue.next(this.internalValue);
  }

  onChangeValue() {
    if (typeof this.field.key == 'string') {
      this.item[this.field.key] = this.internalValue;
      this.sendChange();
      return;
    }

    let itemFinal = this.item;
    for (let i = 0; i < this.field.key.length; i++) {
      const key = this.field.key[i];
      if (i == this.field.key.length-1) {
        itemFinal[key] = this.internalValue;
        break;
      }
      itemFinal = itemFinal[key];
    }

    this.sendChange();
  }

  loadValue() {
    if (this.item == undefined) {
      return;
    }

    if (typeof this.field.key == 'string' && this.item[this.field.key] != undefined) {
      this.internalValue = this.item[this.field.key];
      return;
    }

    let valueFinal = this.item;
    for (const key of this.field.key) {
      if(valueFinal[key] == undefined){
        return;
      }
      valueFinal = valueFinal[key];
    }
    this.internalValue = valueFinal;

    this.sendChange();
  }
}
