import { Injectable } from '@angular/core';
import { Hardware } from '../models/hardware';
import { GenericService } from './generic-service';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from 'src/app/helpers/api.url';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class HardwareService extends GenericService<Hardware>{

  constructor(http: HttpClient) {
    super(http, API_URLS.HARDWARE_API);
  }

}
