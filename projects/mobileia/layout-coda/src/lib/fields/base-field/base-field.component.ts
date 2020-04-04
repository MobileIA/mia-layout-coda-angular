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

  onChangeValue() {
    if (typeof this.field.key == 'string') {
      this.item[this.field.key] = this.internalValue;
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
  }

  loadValue() {
    if (typeof this.field.key == 'string') {
      this.internalValue = this.item[this.field.key];
      return;
    }

    let valueFinal = this.item;
    for (const key of this.field.key) {
      valueFinal = valueFinal[key];
    }
    this.internalValue = valueFinal;

    // Recorrer los distintos niveles version basica
    /*if (this.field.key.length == 2) {
      this.internalValue = this.item[this.field.key[0]][this.field.key[1]];
    } else if (this.field.key.length == 3) {
      this.internalValue = this.item[this.field.key[0]][this.field.key[1]][this.field.key[2]];
    } else if (this.field.key.length == 4) {
      this.internalValue = this.item[this.field.key[0]][this.field.key[1]][this.field.key[2]][this.field.key[3]];
    }*/
  }
}
