import { Component, OnInit } from '@angular/core';
import { CodaConfigService } from 'projects/mobileia/layout-coda/src/lib/services/coda-config.service';
import { CodaToolbarConfig } from 'projects/mobileia/layout-coda/src/lib/entities/coda-toolbar-config';
import { Subject } from 'rxjs';

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
      backgroundImage: '/assets/img/illustration-login.png',
      onRecovery: null,
      recoverySuccessRoute: '',
    });

    this.configService.sidebar.next({
      title: 'GetterIQ',
      iconLogo: '/assets/img/icons/icon-google.png',
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
          icon: 'swap_horiz',
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
          icon: 'shop',
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
        {
          type: 'child',
          title: 'Settings',
          icon: 'settings',
          childrens: [
            {
              type: 'item',
              title: 'Account info',
              url: '/'
            },
            {
              type: 'item',
              title: 'Company Profile',
              url: '/'
            },
            {
              type: 'item',
              title: 'Offers',
              url: '/'
            },
            {
              type: 'item',
              title: 'Materials',
              url: '/'
            },
            {
              type: 'item',
              title: 'Job Types',
              url: '/'
            },
            {
              type: 'item',
              title: 'Job Status',
              url: '/'
            },
            {
              type: 'item',
              title: 'Lead Sources',
              url: '/'
            },
            {
              type: 'item',
              title: 'Email Templates',
              url: '/'
            },
            {
              type: 'item',
              title: 'User Managements',
              url: '/'
            },
            {
              type: 'item',
              title: 'Units (Vehicles)',
              url: '/'
            },
          ]
        },
      ]
    });

    let toolbar = new CodaToolbarConfig();
    toolbar.extraMenus = [
      { icon: 'add_circle_outline', title: 'Add New2', items: [
        { id: 1, icon: 'add_circle_outline', title: 'Estimate 2', color: 'rgb(51, 151, 255)' },
        { id: 2, icon: 'add_circle_outline', title: 'Job 2', color: 'rgb(140, 216, 103)' },
        { id: 3, icon: 'list', title: 'Appointment 2', color: 'rgb(127, 63, 255)' },
      ] }
    ];
    toolbar.onExtraItemClick.subscribe(item => {
      console.log(item);
    });

    toolbar.searchItemPrint = (item) => {
      return item;
    }
    toolbar.searchQueryRun.subscribe(query => {

      let data = ['One', 'Two', 'Three', 'Four'];

      toolbar.searchQueryResult.next(data.filter(op => op.toLocaleLowerCase().includes(query.toLocaleLowerCase())));
    });
    toolbar.searchItemSelected.subscribe(item => {
      console.log('selected');
      console.log(item);
    });

    this.configService.toolbar.next(toolbar);
  }
}
