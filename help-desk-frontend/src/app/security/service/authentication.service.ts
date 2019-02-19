import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Roles } from 'src/app/buisness/models/roles';
import { JwtHelperService } from '@auth0/angular-jwt'
import { User } from 'src/app/buisness/models/user';
import { PathName } from 'src/app/helpers/path-name';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { API_URLS } from 'src/app/helpers/api.url';
import { ROLES_NAMES } from 'src/app/helpers/roles.names';
import { NgForm } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private jwtToken = null;
  private currentUser: User;

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient,
    private router: Router) {
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  setLoggedIn(loggedIn: boolean): void {
    return this.loggedIn.next(loggedIn);
  }

  public onLogin(user: NgForm) {
    return this.http.post(API_URLS.LOGIN_API, user, { observe: 'response' }).subscribe(data => {
      let jwt = data.headers.get('Authorization');
      if (jwt !== null) {
        this.saveToken(jwt);
        this.loggedIn.next(true);
        this.router.navigateByUrl('/home');
        this.router.initialNavigation();
      }
    });
  }

  public saveToken(jwt: string) {
    if (jwt !== null) {
      this.jwtToken = null;
      this.jwtToken = jwt;
      this.loggedIn.next(true);
      if (localStorage.getItem(PathName.TOKEN)) {
        localStorage.removeItem(PathName.TOKEN);
      }
      this.currentUser = new User();
      localStorage.setItem(PathName.TOKEN, jwt);
      let jwtHelper = new JwtHelperService();
      this.currentUser.roles = jwtHelper.decodeToken(this.jwtToken).roles;
      this.currentUser.username = jwtHelper.decodeToken(this.jwtToken).sub;
      this.currentUser.firstName = jwtHelper.decodeToken(this.jwtToken).firstName;
      this.currentUser.lastName = jwtHelper.decodeToken(this.jwtToken).lastName;
      localStorage.setItem(PathName.USER_CURRENT, JSON.stringify(this.currentUser));
    }

  }

  public getCurrentUser(): User {
    if (localStorage.getItem(PathName.USER_CURRENT))
      this.currentUser = JSON.parse(localStorage.getItem(PathName.USER_CURRENT));
    return this.currentUser;
  }

  public getRoles(): Array<Roles> {
    if (this.getCurrentUser())
      return this.getCurrentUser().roles;
  }

  public getMenus(): Array<String> {
    if (this.getCurrentUser())
      return this.getCurrentUser().menus;
  }

  public getUserName(): string {
    if (this.getCurrentUser()) {
      return this.getCurrentUser().username;
    }
    return null;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  public getToken() {
    return localStorage.getItem(PathName.TOKEN);
  }

  public onLogOut() {
    this.loggedIn.next(false);
    localStorage.clear();
    this.jwtToken = null;
    this.loggedIn.next(false);
    return this.http.get(API_URLS.LOGOUT_API, { withCredentials: true });

  }

  public isAdmin() {
    if (this.getCurrentUser()) {
      for (let role of this.getRoles()) {
        return role.code === ROLES_NAMES.ADMIN_ROLE;
      }
    }
    return false;
  }
}