import { Component, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field/base-field.component';

@Component({
  selector: 'coda-row-field',
  templateUrl: './row-field.component.html',
  styleUrls: ['./row-field.component.scss']
})
export class RowFieldComponent extends BaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
