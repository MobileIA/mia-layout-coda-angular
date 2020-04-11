import { Injectable } from '@angular/core';
import { CodaTableService } from 'projects/mobileia/layout-coda/src/lib/services/coda-table.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@mobileia/authentication';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService extends CodaTableService<any> {

  constructor(
    protected http: HttpClient,
    protected authService: AuthenticationService
  ) {
    super(http, authService);
    this.basePathUrl = environment.baseUrl + 'customer';
  }
}
