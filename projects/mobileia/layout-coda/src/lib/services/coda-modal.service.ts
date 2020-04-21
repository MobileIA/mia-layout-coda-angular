import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CodaFormModalComponent } from '../modals/coda-form-modal/coda-form-modal.component';
import { CodaModalConfig } from '../entities/coda-modal-config';

@Injectable({
  providedIn: 'root'
})
export class CodaModalService {

  constructor(
    public dialog: MatDialog
  ) { }

  openForm(config: CodaModalConfig) {
    this.dialog.open(CodaFormModalComponent, {
      data: config,
      width: '700px',
      panelClass: config.classModal,
    });
  }
}
