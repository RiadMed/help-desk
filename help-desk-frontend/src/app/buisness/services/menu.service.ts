import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';
import { GenericService } from './generic-service';
import { API_URLS } from 'src/app/helpers/api.url';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class MenuService extends GenericService<Menu>{

  constructor(http: HttpClient) {
    super(http, API_URLS.MENU_API);
  }

}
