import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CodaLoginConfig } from '../entities/coda-login-config';
import { CodaSidebarConfig } from '../entities/coda-sidebar-config';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CodaConfigService {

  login: BehaviorSubject<CodaLoginConfig>;
  sidebar: BehaviorSubject<CodaSidebarConfig>;

  constructor() {
    this.login = new BehaviorSubject<CodaLoginConfig>({} as CodaLoginConfig);
    this.sidebar = new BehaviorSubject<CodaSidebarConfig>({} as CodaSidebarConfig);
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
}
