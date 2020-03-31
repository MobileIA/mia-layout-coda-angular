import { Component, OnInit } from '@angular/core';
import { CodaConfigService } from '../../services/coda-config.service';

@Component({
  selector: 'coda-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    protected configService: CodaConfigService
  ) { }

  ngOnInit(): void {
  }

}
