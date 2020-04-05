import { Component, OnInit } from '@angular/core';
import { CodaConfigService } from 'projects/mobileia/layout-coda/src/public-api';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  constructor(
    protected configService: CodaConfigService
  ) { }

  ngOnInit(): void {
    this.configService.login.next({
      title: 'Login Test',
      logoUrl: '',
      successRoute: '/dashboard',
      verifyRole: false,
      withRole: 0,
      isInternal: true
    });
  }

}
