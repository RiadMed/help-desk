import { Injectable } from '@angular/core';
import { MarqueFamily } from '../models/marque-family';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from 'src/app/helpers/api.url';
import { GenericService } from './generic-service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MarqueFamilyService extends GenericService<MarqueFamily>{

  constructor(http: HttpClient) {
    super(http, API_URLS.MARQUES_FAMILY_API);
  }

}
