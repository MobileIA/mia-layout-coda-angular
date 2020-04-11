import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseFieldComponent } from '../base-field/base-field.component';
import { CodaFieldConfig } from '../../entities/coda-field-config';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'coda-row-field',
  templateUrl: './row-field.component.html',
  styleUrls: ['./row-field.component.scss']
})
export class RowFieldComponent extends BaseFieldComponent implements OnInit {

  @Output() selectedPlace = new EventEmitter<{ field: CodaFieldConfig, place: Address }>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onSelectedPlace(event) {
    this.selectedPlace.emit(event);
  }
}
