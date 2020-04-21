import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@mobileia/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'coda-recovery-page',
  templateUrl: './recovery-page.component.html',
  styleUrls: ['./recovery-page.component.scss']
})
export class RecoveryPageComponent implements OnInit {

  emailInput = '';
  passInput = '';
  tokenInput = '';
  messageError = '';
  hide = true;

  constructor(
    protected authService: AuthenticationService,
    protected navigator: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.changePasswordRecovery(this.tokenInput, this.emailInput, this.passInput).toPromise().then(data => {
      if (!data.success) {
        alert('No hemos podido cambiar su contraseña');
        return;
      }
      alert('Ha actualizado su contrasea, ingrese ahora.');
      this.navigator.navigateByUrl('/' + this.authService.pathLogin);
    });
  }
}
