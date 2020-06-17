import { Injectable } from '@angular/core';
import { MiaAuthHttpService, AuthenticationService } from '@mobileia/authentication';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, MIATableModel, ApiPagination } from '@mobileia/core';

@Injectable({
  providedIn: 'root'
})
export class CodaTableService<T> extends MiaAuthHttpService {

  basePathUrl = '';

  constructor(
    protected http: HttpClient,
    protected authService: AuthenticationService,
    //@Optional() protected basePath: string
  ) {
    super(http, authService);
    //this.basePathUrl = basePath;
  }

  fetch(itemId: number): Observable<ApiResponse<T>> {
    return this.postAuthObject(this.basePathUrl + '/fetch', { id: itemId });
  }

  save(item: T): Observable<ApiResponse<boolean>> {
    return this.postAuthObject(this.basePathUrl + '/save', item);
  }

  fetchList(params: MIATableModel): Observable<ApiResponse<ApiPagination<T>>> {
    return this.postAuthObject(this.basePathUrl + '/list', params.toParams());
  }

  remove(itemId: number): Observable<ApiResponse<boolean>> {
    return this.postAuthObject(this.basePathUrl + '/remove', { id: itemId });
  }

  fetchPro(itemId: number): Promise<T> {
    return this.postAuthObjectPro(this.basePathUrl + '/fetch', { id: itemId });
  }

  savePro(item: T): Promise<boolean> {
    return this.postAuthObjectPro(this.basePathUrl + '/save', item);
  }

  fetchListPro(params: MIATableModel): Promise<ApiPagination<T>> {
    return this.postAuthObjectPro(this.basePathUrl + '/list', params.toParams());
  }

  removePro(itemId: number): Promise<boolean> {
    return this.postAuthObjectPro(this.basePathUrl + '/remove', { id: itemId });
  }
}
