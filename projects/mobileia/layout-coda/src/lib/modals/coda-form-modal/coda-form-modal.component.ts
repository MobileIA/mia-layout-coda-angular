import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CodaModalConfig } from '../../entities/coda-modal-config';

@Component({
  selector: 'coda-form-modal',
  templateUrl: './coda-form-modal.component.html',
  styleUrls: ['./coda-form-modal.component.scss']
})
export class CodaFormModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CodaFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CodaModalConfig
  ) { }

  ngOnInit(): void {
  }

}
