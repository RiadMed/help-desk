import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../models/menu';
import { PathName } from 'src/app/helpers/path-name';

const header_api: string = "/menus";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }

  public findMenuByUser(username: string) {
    return this.http.get<Menu[]>(header_api + "/user_menu/" + username, { headers: new HttpHeaders({ 'Authorization': localStorage.getItem(PathName.TOKEN) }) });
  }
}
