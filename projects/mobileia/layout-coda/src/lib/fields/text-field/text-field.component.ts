import { Component, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field/base-field.component';

@Component({
  selector: 'coda-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent extends BaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
