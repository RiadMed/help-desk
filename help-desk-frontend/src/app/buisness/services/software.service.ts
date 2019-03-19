import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { GenericService } from './generic-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS } from 'src/app/helpers/api.url';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PathName } from 'src/app/helpers/path-name';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService extends GenericService<Product>{

  constructor(http:HttpClient) {
    super(http, API_URLS.PRODUCT_API);
  }

}
