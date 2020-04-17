export interface CodaSidebarConfig {
    backgroundColor: string;
    title: string;
    items: CodaSidebarItem[];
}

export interface CodaSidebarItem {
    title: string;
    type: string;
    icon?: string;
    url?: string;
    isActive?: boolean;
}