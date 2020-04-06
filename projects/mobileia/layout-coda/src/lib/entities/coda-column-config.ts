export interface CodaColumnConfig {
    key: string;
    field_key: string;
    type: string;
    title: string;
    classes?: string;
    is_order?: boolean;
    options?: any[];
    url?: string;
    fields_url?: string[];
}
