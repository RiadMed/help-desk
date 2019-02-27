import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from 'src/app/helpers/api.url';
import { PathName } from 'src/app/helpers/path-name';
import { Affectation } from '../models/affectation';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root'
})
export class AffectationService extends GenericService<Affectation>{


  constructor(http: HttpClient) {
    super(http, API_URLS.AFFECTATION_API);
  }


  public saveAffectData(model: Affectation) {
    return this.getHttpClient().post<Affectation>(API_URLS.AFFECTATION_API + "/Affect", model, { headers: new HttpHeaders({ 'Authorization': localStorage.getItem(PathName.TOKEN) }) });
  }
}
