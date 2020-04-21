import { Component, OnInit } from '@angular/core';
import { CodaConfigService } from '../../services/coda-config.service';
import { CodaToolbarConfig } from '../../entities/coda-toolbar-config';
import { AuthenticationService, MIAUser } from '@mobileia/authentication';

@Component({
  selector: 'coda-toolbar',
  templateUrl: './coda-toolbar.component.html',
  styleUrls: ['./coda-toolbar.component.scss']
})
export class CodaToolbarComponent implements OnInit {

  config: CodaToolbarConfig;
  currentUser: MIAUser;

  constructor(
    protected configService: CodaConfigService,
    protected authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.processConfig();
    this.loadUser();
  }

  onClickLogoout() {
    this.authService.signOut();
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
