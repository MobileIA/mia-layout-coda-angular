import { Component, OnInit } from '@angular/core';
import { CodaConfigService } from '../../services/coda-config.service';
import { CodaToolbarConfig } from '../../entities/coda-toolbar-config';

@Component({
  selector: 'coda-toolbar',
  templateUrl: './coda-toolbar.component.html',
  styleUrls: ['./coda-toolbar.component.scss']
})
export class CodaToolbarComponent implements OnInit {

  config: CodaToolbarConfig;

  constructor(
    protected configService: CodaConfigService
  ) { }

  ngOnInit(): void {
    this.processConfig();
  }

  onClickItemExtraMenu(item) {
    this.config.onExtraItemClick.next(item);
  }

  processConfig() {
    this.configService.toolbar.subscribe(data => this.config = data);
  }
}
