import { CodaFieldConfig } from './coda-field-config';
import { Subject } from 'rxjs';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

export class CodaFormConfig {
    fields: CodaFieldConfig[];
    item?: any;

    onSelectPlace = new Subject<{ field: CodaFieldConfig, place: Address }>();
}
