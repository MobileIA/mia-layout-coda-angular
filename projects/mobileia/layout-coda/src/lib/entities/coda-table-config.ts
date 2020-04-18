import { CodaColumnConfig } from './coda-column-config';
import { CodaTableService } from '../services/coda-table.service';
import { Subject } from 'rxjs';
import { MIATableModel } from '@mobileia/core';

export class CodaTableConfig {
    columns: CodaColumnConfig[];
    service: CodaTableService<any>;
    params = new MIATableModel();
    isShowPaginator = true;
    
    onChangeField = new Subject<{ column: CodaColumnConfig, item: any}>();
    onAfterLoad = (items) => {
        return items;
    };
}
