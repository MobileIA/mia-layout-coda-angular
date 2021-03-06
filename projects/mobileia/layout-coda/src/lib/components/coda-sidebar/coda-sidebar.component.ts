import { Component, OnInit } from '@angular/core';
import { CodaConfigService } from '../../services/coda-config.service';
import { CodaSidebarConfig, CodaSidebarItem } from '../../entities/coda-sidebar-config';

@Component({
  selector: 'coda-sidebar',
  templateUrl: './coda-sidebar.component.html',
  styleUrls: ['./coda-sidebar.component.scss']
})
export class CodaSidebarComponent implements OnInit {

  isSidebarOpen = true;

  config: CodaSidebarConfig;

  constructor(
    protected configService: CodaConfigService
  ) { }

  ngOnInit(): void {
    this.processConfig();
    this.observableOpen();
  }

  clickItem(item: CodaSidebarItem) {
    this.cleanAllActive();
    item.isActive = true;
  }

  cleanAllActive() {
    this.config.items.forEach(item => {
      item.isActive = false;
      if (item.childrens) {
        item.childrens.forEach(subitem => subitem.isActive = false);
      }
    });
  }

  processConfig() {
    this.configService.sidebar.subscribe(data => this.config = data);
  }

  observableOpen() {
    this.configService.sidebarOpen.subscribe(isOpen => this.isSidebarOpen = isOpen);
  }
}
