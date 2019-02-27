import { Injectable } from '@angular/core';
import { Software } from '../models/software';
import { GenericService } from './generic-service';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from 'src/app/helpers/api.url';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService extends GenericService<Software>{

  constructor(http:HttpClient) {
    super(http, API_URLS.SOFTWARE_API);
  }
}
