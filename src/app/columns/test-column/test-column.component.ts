import { Component, OnInit } from '@angular/core';
import { ActionsColumnComponent } from 'projects/mobileia/layout-coda/src/lib/columns/actions-column/actions-column.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-column',
  templateUrl: './test-column.component.html',
  styleUrls: ['./test-column.component.scss']
})
export class TestColumnComponent extends ActionsColumnComponent implements OnInit {

  constructor(
    protected navigator: Router
  ) {
    super(navigator);
  }

  ngOnInit(): void {
  }

}
