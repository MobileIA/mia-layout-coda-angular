import { CodaFieldConfig } from './coda-field-config';
import { Subject } from 'rxjs';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { CodaTableService } from '../services/coda-table.service';

export class CodaFormConfig {
    fields: CodaFieldConfig[];
    service: CodaTableService<any>;
    item?: any;

    onSelectPlace = new Subject<{ field: CodaFieldConfig, place: Address }>();
    onResponse = new Subject<{ item: any, response: any }>();
}
