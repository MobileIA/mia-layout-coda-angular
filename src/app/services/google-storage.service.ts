import { Injectable } from '@angular/core';
import { CodaFileService } from 'projects/mobileia/layout-coda/src/lib/services/coda-file.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleStorageService extends CodaFileService {

  constructor(
    protected http: HttpClient
  ) {
    super(http);
    this.baseUrl = 'http://0.0.0.0:8080/';
  }
}
