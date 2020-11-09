import { Component, OnInit } from '@angular/core';
import { CodaConfigService } from '../../services/coda-config.service';
import { CodaToolbarConfig } from '../../entities/coda-toolbar-config';
import { AuthenticationService, MIAUser } from '@mobileia/authentication';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'coda-toolbar',
  templateUrl: './coda-toolbar.component.html',
  styleUrls: ['./coda-toolbar.component.scss']
})
export class CodaToolbarComponent implements OnInit {

  isSidebarOpen = true;
  config: CodaToolbarConfig;
  currentUser: MIAUser;

  searchControl = '';
  searchItems = [];

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
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  onClickSidebarClose() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.configService.sidebarOpen.next(this.isSidebarOpen);
  }

  onClickItemExtraMenu(item) {
    this.config.onExtraItemClick.next(item);
  }

  processConfig() {
    this.configService.toolbar.subscribe(data => {
      this.config = data;
      this.config.searchQueryResult.subscribe(data => {
        this.searchItems = data;
      });
    });
  }

  loadUser() {
    this.authService.currentUser.subscribe(data => this.currentUser = data);
  }

  searchBar() {
    if(this.searchControl == ''){
      return new Subject();
    }

    this.config.searchQueryRun.next(this.searchControl);
  }

  searchItemPrint(item) {
    return this.config.searchItemPrint(item);
  }

  optionSearchSelected(option) {
    let item = option.option.value;
    this.config.searchItemSelected.next(item);
  }
}
