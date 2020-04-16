import { Component, OnInit } from '@angular/core';
import { BaseFieldComponent } from 'projects/mobileia/layout-coda/src/public-api';

@Component({
  selector: 'app-test-field',
  templateUrl: './test-field.component.html',
  styleUrls: ['./test-field.component.scss']
})
export class TestFieldComponent extends BaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
