import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marque } from "../models/Marque";
import { GenericService } from './generic-service';
import { API_URLS } from 'src/app/helpers/api.url';

@Injectable({
  providedIn: 'root'
})
export class MarqueService extends GenericService<Marque>{

  constructor(http: HttpClient) {
    super(http, API_URLS.MARQUES_API);
  }

}
