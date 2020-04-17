import { Component, OnInit } from '@angular/core';
import { CodaConfigService } from 'projects/mobileia/layout-coda/src/lib/services/coda-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Getter IQ';

  constructor(
    protected configService: CodaConfigService
  ) { }

  ngOnInit(): void {
    this.configService.login.next({
      title: 'Project Test',
      titleTwo: 'Welcome Back',
      logoUrl: '',
      successRoute: '/dashboard',
      verifyRole: false,
      withRole: 0,
      isInternal: true,
      isLoginWithGoogle: true,
      backgroundImage: '/assets/img/illustration-login.png'
    });

    this.configService.sidebar.next({
      title: 'GetterIQ',
      backgroundColor: '',
      items: [
        {
          type: 'header',
          title: 'SECTIONS'
        },
        {
          type: 'item',
          title: 'Dashboard',
          icon: 'menu',
          url: '/dashboard'
        },
        {
          type: 'item',
          title: 'Calendar',
          icon: 'event_available',
          url: '/'
        },
        {
          type: 'item',
          title: 'Emails',
          icon: 'email',
          url: '/'
        },
        {
          type: 'item',
          title: 'Leads',
          icon: 'equalizer',
          url: '/'
        },
        {
          type: 'item',
          title: 'Customers',
          icon: 'supervisor_account',
          url: '/'
        },
        {
          type: 'item',
          title: 'Jobs',
          icon: '',
          url: '/'
        },
        {
          type: 'item',
          title: 'Apointments',
          icon: 'list',
          url: '/'
        },
        {
          type: 'item',
          title: 'Campaign',
          icon: '',
          url: '/'
        },
        {
          type: 'divider',
          title: ''
        },
        {
          type: 'header',
          title: 'SETTINGS'
        },
      ]
    });
  }
}
