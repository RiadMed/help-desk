import { Injectable } from '@angular/core';
import { GenericService } from './generic-service';
import { Affectation } from '../models/affectation';
import { API_URLS } from 'src/app/helpers/api.url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PathName } from 'src/app/helpers/path-name';

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
