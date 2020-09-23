import { CodaFormConfig } from './coda-form-config';
import { Subject } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { CodaFormModalComponent } from '../modals/coda-form-modal/coda-form-modal.component';

export class CodaModalConfig {
    title?: string;
    form: CodaFormConfig;
    textSaveButton? = 'Save';
    textCancelButton? = 'Cancel';
    primaryColor?: string;
    classModal?: any;
    disableClose?: boolean = false;
    cancelSubject?: Subject<MatDialogRef<CodaFormModalComponent>>;
}
