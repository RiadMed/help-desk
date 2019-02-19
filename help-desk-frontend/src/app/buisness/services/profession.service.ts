import { Injectable } from '@angular/core';
import { GenericService } from './generic-service';
import { Profession } from '../models/profession';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from 'src/app/helpers/api.url';


@Injectable({
  providedIn: 'root'
})
export class ProfessionService extends GenericService<Profession> {

  constructor(http: HttpClient) {
    super(http, API_URLS.PROFESSION_API);
  }

}
