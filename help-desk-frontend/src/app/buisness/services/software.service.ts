import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from 'src/app/helpers/api.url';
import { Product } from '../models/Product';
import { GenericService } from './generic-service';
import { Observable } from 'rxjs';
import { PathName } from 'src/app/helpers/path-name';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService extends GenericService<Product>{

  constructor(http: HttpClient) {
    super(http, API_URLS.PRODUCT_API);
  }


  public findByType(soft: number): Observable<Product[]> {
    return this.getHttpClient().get<Product[]>(
      API_URLS.PRODUCT_API + '/type/' + soft,
      { headers: new HttpHeaders({ 'Authorization': localStorage.getItem(PathName.TOKEN) }) })
  }
}
