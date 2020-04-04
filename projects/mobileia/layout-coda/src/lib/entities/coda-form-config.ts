import { CodaTableService } from '../../public-api';
import { CodaFieldConfig } from './coda-field-config';

export class CodaFormConfig {
    fields: CodaFieldConfig[];
    service: CodaTableService<any>;
    item: any;
}
