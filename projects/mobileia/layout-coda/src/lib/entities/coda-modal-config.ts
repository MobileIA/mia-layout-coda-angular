import { CodaFormConfig } from './coda-form-config';

export class CodaModalConfig {
    title?: string;
    form: CodaFormConfig;
    textSaveButton? = 'Save';
    textCancelButton? = 'Cancel';
    primaryColor?: string;
}
