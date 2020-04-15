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
  }
}
