import { Component, OnInit, Input } from '@angular/core';
import { CodaFormConfig } from '../../entities/coda-form-config';

@Component({
  selector: 'coda-form',
  templateUrl: './coda-form.component.html',
  styleUrls: ['./coda-form.component.scss']
})
export class CodaFormComponent implements OnInit {

  @Input() formConfig: CodaFormConfig;
  isSending = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedPlace(event) {
    this.formConfig.onSelectPlace.next(event);
  }

  onSubmit() {
    if (this.isSending) {
      return;
    }

    this.isSending = true;
    this.formConfig.service.save(this.formConfig.item).toPromise().then(data => {
      if (!data.success) {
        alert('No se pudo guardar, volver a intentar');
        return;
      }
      // Comunicar que se termino de enviar
      this.formConfig.onResponse.next({ item: this.formConfig.item, response: data.response });
    })
    .catch(error => {
      alert('Se ha producido un error');
    });
  }
}
