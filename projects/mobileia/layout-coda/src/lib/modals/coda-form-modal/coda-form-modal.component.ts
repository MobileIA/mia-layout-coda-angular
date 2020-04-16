import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CodaModalConfig } from '../../entities/coda-modal-config';
import { CodaFormComponent } from '../../components/coda-form/coda-form.component';

@Component({
  selector: 'coda-form-modal',
  templateUrl: './coda-form-modal.component.html',
  styleUrls: ['./coda-form-modal.component.scss']
})
export class CodaFormModalComponent implements OnInit {

  @ViewChild('formHtml') formHtml: CodaFormComponent

  constructor(
    public dialogRef: MatDialogRef<CodaFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CodaModalConfig
  ) { }

  ngOnInit(): void {
    this.data.form.onResponse.subscribe(data => {
      this.dialogRef.close();
    });
  }

  onSubmit() {
    this.formHtml.onSubmit();
  }
}
