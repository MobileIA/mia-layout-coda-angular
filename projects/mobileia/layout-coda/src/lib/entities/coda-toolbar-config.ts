import { Subject } from 'rxjs';

export class CodaToolbarConfig {
    isShowNotifications = true;
    extraMenus: CodaExtraMenuToolbarItem[] = [];
    onExtraItemClick = new Subject<any>();
}

export interface CodaExtraMenuToolbarItem {
    icon?: string;
    title: string;
    items?: { id: number, icon?: string, title: string, color?: string }[];
}