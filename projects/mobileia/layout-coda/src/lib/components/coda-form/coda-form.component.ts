import { Component, OnInit, Input } from '@angular/core';
import { CodaFormConfig } from '../../entities/coda-form-config';

@Component({
  selector: 'coda-form',
  templateUrl: './coda-form.component.html',
  styleUrls: ['./coda-form.component.scss']
})
export class CodaFormComponent implements OnInit {

  @Input() formConfig: CodaFormConfig;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedPlace(event) {
    this.formConfig.onSelectPlace.next(event);
  }
}
