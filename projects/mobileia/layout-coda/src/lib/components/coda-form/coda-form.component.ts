import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CodaFormConfig } from '../../entities/coda-form-config';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'coda-form',
  templateUrl: './coda-form.component.html',
  styleUrls: ['./coda-form.component.scss']
})
export class CodaFormComponent implements OnInit {

  @ViewChild('messageError') private messageError: SwalComponent;

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
      this.isSending = false;
      if (!data.success) {
        this.messageError.title = 'Error!';
        this.messageError.text = data.error.message;
        this.messageError.fire();
        return;
      }
      // Comunicar que se termino de enviar
      this.formConfig.onResponse.next({ item: this.formConfig.item, response: data.response });
    })
    .catch(error => {
      this.isSending = false;
      this.messageError.title = 'Error!';
      this.messageError.text = error.message;
      this.messageError.fire();
    });
  }
}
