import { CodaFileService } from '../services/coda-file.service';
import { Subject } from 'rxjs';

export interface CodaFieldConfig {
    type: string;
    key: any;
    title: string;
    caption?: string;
    placeholder?: string;
    icon?: string;
    classes?: string;
    options?: any[];
    children?: CodaFieldConfig[];
    required?: boolean;
    serviceFile?: CodaFileService;
    component?: any;
    changeValue?: Subject<any>;
}
