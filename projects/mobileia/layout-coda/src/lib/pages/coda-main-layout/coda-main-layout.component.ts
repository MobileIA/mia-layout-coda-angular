import { Component, OnInit } from '@angular/core';
import { CodaSidebarConfig } from '../../entities/coda-sidebar-config';
import { CodaConfigService } from '../../services/coda-config.service';

@Component({
  selector: 'codamain-layout',
  templateUrl: './coda-main-layout.component.html',
  styleUrls: ['./coda-main-layout.component.scss']
})
export class CodaMainLayoutComponent implements OnInit {

  isSidebarOpen = true;
  config: CodaSidebarConfig;

  constructor(
    protected configService: CodaConfigService
  ) { }

  ngOnInit(): void {
    this.observableOpen();
  }

  processConfig() {
    this.configService.sidebar.subscribe(data => this.config = data);
  }

  observableOpen() {
    this.configService.sidebarOpen.subscribe(isOpen => this.isSidebarOpen = isOpen);
  }
}
