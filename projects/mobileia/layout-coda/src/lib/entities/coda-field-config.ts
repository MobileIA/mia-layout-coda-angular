import { CodaFileService } from '../services/coda-file.service';

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
}
