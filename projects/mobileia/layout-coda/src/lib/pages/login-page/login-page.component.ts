import { Component, OnInit } from '@angular/core';
import { CodaConfigService } from '../../services/coda-config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@mobileia/authentication';
import { CodaLoginConfig } from '../../entities/coda-login-config';
import { switchMap } from 'rxjs/operators';
import { config } from 'rxjs';

@Component({
  selector: 'coda-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  config: CodaLoginConfig;
  emailInput = '';
  passInput = '';
  messageError = '';
  hide = true;

  constructor(
    protected configService: CodaConfigService,
    private route: ActivatedRoute,
    private navigator: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.processConfig();
  }

  onSubmit() {
    // Limpiar mensaje de error
    this.messageError = '';
    // Verificar si ingreso el email
    if (this.emailInput == '') {
      this.messageError = 'Debe ingresar el email';
      return;
    }
    if (this.passInput == '') {
      this.messageError = 'Debe ingresar la contraseña';
      return;
    }
    if (this.config.isInternal) {
      this.requestInternal();
    }
  }

  onClickRecovery() {
    if (this.config.onRecovery != null && this.config.onRecovery != undefined) {
      this.config.onRecovery.next(true);
      return false;
    }

    // Limpiar mensaje de error
    this.messageError = '';
    // Verificar si ingreso el email
    if (this.emailInput == '') {
      this.messageError = 'Debe ingresar el email';
      return false;
    }

    this.authService.recoveryPassInternal(this.emailInput).toPromise().then(data => {
      alert('Se ha enviado un email con los pasos a seguir.');
    });

    return false;
  }
  
  onClickGoogle() {
    this.configService.loginClick.next('google');
  }

  requestInternal() {
    this.authService.signInWithEmailAndPasswordInternal(this.emailInput, this.passInput).toPromise().then(data => {
      if (data.success) {

        if (this.isValidRole(data.response.user.role)) {
          this.navigator.navigateByUrl(this.config.successRoute);
        } else {
          this.messageError = 'Usted no tiene permisos para ingresar';
          this.authService.signOut();
        }

      } else {
        this.messageError = data.error.message;
      }
    });
  }

  processConfig() {
    this.configService.login.pipe(switchMap(data => {
      this.config = data;
      return this.route.queryParams;
    }))
    .pipe(switchMap(params => {
      const redirect = params.redirect;
      if (redirect !== '/login' && redirect !== '/' && redirect !== '' && redirect !== null
      && redirect !== undefined && redirect !== '%2F' && redirect !== '/login;redirect=%2F') {
        this.config.successRoute = redirect;
      }

      return this.authService.isLoggedIn;
    }))
    .pipe(switchMap(isLogged => {
      if (isLogged) {
        this.navigator.navigateByUrl(this.config.successRoute);
      }
      return this.authService.getAccessToken();
    }))
    .subscribe(accessToken => {
      if (accessToken == null || accessToken == '' || accessToken == undefined) {
        
      } else {
        this.navigator.navigateByUrl(this.config.successRoute);
      }
    });
  }

  /**
   * Funcion que determinar si el usuario para ingresar necesita un rol especial
   */
  isValidRole(userRole: number): boolean {
    // Si no necesita verificar rol
    if (!this.config.verifyRole) {
      return true;
    }
    // Verificar si es el mismo rol
    if (this.config.withRole == userRole) {
      return true;
    }
    return false;
  }

  getPlaceholderEmail() {
    if(this.config != undefined && this.config.placeholderEmail != undefined){
      return this.config.placeholderEmail;
    }
    return '';
  }
}
