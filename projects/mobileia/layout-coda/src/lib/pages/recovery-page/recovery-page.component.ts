import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@mobileia/authentication';
import { Router, ActivatedRoute } from '@angular/router';
import { CodaLoginConfig } from '../../entities/coda-login-config';
import { CodaConfigService } from '../../services/coda-config.service';

@Component({
  selector: 'coda-recovery-page',
  templateUrl: './recovery-page.component.html',
  styleUrls: ['./recovery-page.component.scss']
})
export class RecoveryPageComponent implements OnInit {

  config: CodaLoginConfig;
  emailInput = '';
  passInput = '';
  tokenInput = '';
  messageError = '';
  hide = true;

  constructor(
    protected configService: CodaConfigService,
    protected authService: AuthenticationService,
    protected route: ActivatedRoute,
    protected navigator: Router
  ) { }

  ngOnInit(): void {
    this.processConfig();
    this.loadParams();
  }

  onSubmit() {
    this.authService.changePasswordRecovery(this.tokenInput, this.emailInput, this.passInput).toPromise().then(data => {
      if (!data.success) {
        alert('No hemos podido cambiar su contraseña');
        return;
      }
      alert('Ha actualizado su contrasea, ingrese ahora.');
      this.navigator.navigateByUrl('/auth/login');
    });
  }

  loadParams() {
    this.route.queryParams.subscribe(params => {
      if (params.token) {
        this.tokenInput = params.token;
      }
      if (params.email) {
        this.emailInput = params.email;
      }
    });
  }

  processConfig() {
    this.configService.login.subscribe(data => {
      this.config = data;
    });
  }

  getPlaceholderEmail() {
    if(this.config != undefined && this.config.placeholderEmail != undefined){
      return this.config.placeholderEmail;
    }
    return '';
  }
}
