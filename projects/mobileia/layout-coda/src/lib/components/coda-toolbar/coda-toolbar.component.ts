import { Component, OnInit } from '@angular/core';
import { CodaConfigService } from '../../services/coda-config.service';
import { CodaToolbarConfig } from '../../entities/coda-toolbar-config';
import { AuthenticationService, MIAUser } from '@mobileia/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'coda-toolbar',
  templateUrl: './coda-toolbar.component.html',
  styleUrls: ['./coda-toolbar.component.scss']
})
export class CodaToolbarComponent implements OnInit {

  isSidebarOpen = true;
  config: CodaToolbarConfig;
  currentUser: MIAUser;

  constructor(
    protected configService: CodaConfigService,
    protected authService: AuthenticationService,
    protected navigator: Router
  ) { }

  ngOnInit(): void {
    this.processConfig();
    this.loadUser();
  }

  onClickLogout() {
    this.authService.signOut();
    window.location.reload();
  }

  onClickSidebarClose() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.configService.sidebarOpen.next(this.isSidebarOpen);
  }

  onClickItemExtraMenu(item) {
    this.config.onExtraItemClick.next(item);
  }

  processConfig() {
    this.configService.toolbar.subscribe(data => this.config = data);
  }

  loadUser() {
    this.authService.currentUser.subscribe(data => this.currentUser = data);
  }
}
