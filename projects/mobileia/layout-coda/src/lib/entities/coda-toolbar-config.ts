import { Subject } from 'rxjs';

export class CodaToolbarConfig {
    isShowNotifications = true;
    extraMenus: CodaExtraMenuToolbarItem[] = [];
    onExtraItemClick = new Subject<any>();

    searchQueryRun = new Subject<string>();
    searchQueryResult = new Subject<any>();
    searchItemSelected = new Subject<any>();
    searchItemPrint = (item) => {
        return item;
    };
}

export interface CodaExtraMenuToolbarItem {
    icon?: string;
    title: string;
    items?: { id: number, icon?: string, title: string, color?: string }[];
}