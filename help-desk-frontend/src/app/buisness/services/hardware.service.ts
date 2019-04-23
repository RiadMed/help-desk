import { Injectable } from '@angular/core';
import { Hardware } from '../models/hardware';
import { GenericService } from './generic-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS } from 'src/app/helpers/api.url';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PathName } from 'src/app/helpers/path-name';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class HardwareService extends GenericService<Product>{

  constructor(http: HttpClient) {
    super(http, API_URLS.PRODUCT_API);
  }

  public findByType(soft: number): Observable<Product[]> {
    return this.getHttpClient().get<Product[]>(
      API_URLS.PRODUCT_API + '/type/' + soft,
      { headers: new HttpHeaders({ 'Authorization': localStorage.getItem(PathName.TOKEN) }) })
  }

}
