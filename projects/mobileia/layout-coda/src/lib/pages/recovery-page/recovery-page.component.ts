import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@mobileia/authentication';
import { Router, ActivatedRoute } from '@angular/router';

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
    protected route: ActivatedRoute,
    protected navigator: Router
  ) { }

  ngOnInit(): void {
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
}
