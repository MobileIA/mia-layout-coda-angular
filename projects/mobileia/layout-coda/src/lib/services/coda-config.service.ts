import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CodaLoginConfig } from '../entities/coda-login-config';
import { CodaSidebarConfig } from '../entities/coda-sidebar-config';
import * as _ from 'lodash';
import { CodaToolbarConfig } from '../entities/coda-toolbar-config';

@Injectable({
  providedIn: 'root'
})
export class CodaConfigService {

  login: BehaviorSubject<CodaLoginConfig>;
  loginClick: Subject<string>;
  sidebar: BehaviorSubject<CodaSidebarConfig>;
  sidebarOpen = new BehaviorSubject<boolean>(true);
  toolbar: BehaviorSubject<CodaToolbarConfig>;

  constructor() {
    this.login = new BehaviorSubject<CodaLoginConfig>({} as CodaLoginConfig);
    this.loginClick = new Subject<string>();
    this.sidebar = new BehaviorSubject<CodaSidebarConfig>({} as CodaSidebarConfig);
    this.toolbar = new BehaviorSubject<CodaToolbarConfig>({} as CodaToolbarConfig);
  }

  setLoginVariables(value) {
    let config = this.login.getValue();
    config = _.merge({}, config, value);
    this.login.next(config);
  }

  setSidebarVariables(value) {
    let config = this.sidebar.getValue();
    config = _.merge({}, config, value);
    this.sidebar.next(config);
  }

  setToolbarVariables(value) {
    let config = this.toolbar.getValue();
    config = _.merge({}, config, value);
    this.toolbar.next(config);
  }
}
