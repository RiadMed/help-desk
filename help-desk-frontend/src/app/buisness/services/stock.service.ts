import { Injectable } from '@angular/core';
import { GenericService } from './generic-service';
import { Stock } from '../models/stock';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from 'src/app/helpers/api.url';

@Injectable({
  providedIn: 'root'
})
export class StockService extends GenericService<Stock>{

  constructor(http: HttpClient) {
    super(http, API_URLS.STOCK_API);
  }
}
