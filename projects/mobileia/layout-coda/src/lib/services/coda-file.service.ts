import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodaFileService {

  baseUrl = '';

  constructor(
    protected http: HttpClient
  ) {
    
  }

  upload(file): Observable<any> {
    var formData: FormData = new FormData();
    formData.append('files', file);
    return this.http.post<any>( this.baseUrl + 'mia-core/upload-files', formData);
  }
}
