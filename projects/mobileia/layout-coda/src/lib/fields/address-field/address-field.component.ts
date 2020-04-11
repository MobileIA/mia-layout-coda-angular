import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseFieldComponent } from '../base-field/base-field.component';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { CodaFieldConfig } from '../../entities/coda-field-config';

@Component({
  selector: 'coda-address-field',
  templateUrl: './address-field.component.html',
  styleUrls: ['./address-field.component.scss']
})
export class AddressFieldComponent extends BaseFieldComponent implements OnInit {

  @Output() selectedPlace = new EventEmitter<{ field: CodaFieldConfig, place: Address }>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onChangeAddress(place: Address) {
    let data = place.formatted_address.split(',');
    this.internalValue = data[0];
    this.onChangeValue();
    this.selectedPlace.emit({ field: this.field, place: place });
  }
}
