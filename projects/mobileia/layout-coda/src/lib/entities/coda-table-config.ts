import { CodaColumnConfig } from './coda-column-config';
import { CodaTableService } from '../services/coda-table.service';

export class CodaTableConfig {
    columns: CodaColumnConfig[];
    service: CodaTableService<any>;
}
