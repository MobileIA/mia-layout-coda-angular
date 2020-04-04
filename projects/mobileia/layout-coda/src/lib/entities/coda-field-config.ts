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
}
