import { Component, OnInit, Input } from '@angular/core';
import { CodaColumnConfig } from '../../entities/coda-column-config';
import { CodaTableConfig } from '../../entities/coda-table-config';

@Component({
  selector: 'coda-base-column',
  templateUrl: './base-column.component.html',
  styleUrls: ['./base-column.component.scss']
})
export class BaseColumnComponent implements OnInit {

  @Input() column: CodaColumnConfig;
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
