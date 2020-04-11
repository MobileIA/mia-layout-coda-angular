import { CodaColumnConfig } from './coda-column-config';
import { CodaTableService } from '../services/coda-table.service';
import { Subject } from 'rxjs';

export class CodaTableConfig {
    columns: CodaColumnConfig[];
    service: CodaTableService<any>;
    
    onChangeField = new Subject<{ column: CodaColumnConfig, item: any}>();
    onAfterLoad = (items) => {
        return items;
    };
}
