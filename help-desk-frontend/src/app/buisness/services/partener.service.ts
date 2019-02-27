import { Injectable } from '@angular/core';
import { GenericService } from './generic-service';
import { Partener } from '../models/partener';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS } from 'src/app/helpers/api.url';
import { PathName } from 'src/app/helpers/path-name';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class PartenerService extends GenericService<Partener>{

  constructor(http: HttpClient) {
    super(http, API_URLS.PARTENER_API);
  }
}
