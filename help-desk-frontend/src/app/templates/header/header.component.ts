import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/security/service/authentication.service';
import { Menu } from 'src/app/buisness/models/menu';
import { MenuService } from 'src/app/buisness/services/menu.service';
import { Router, NavigationEnd, Event } from '@angular/router';
import { PathName } from 'src/app/helpers/path-name';
import { HeaderService } from 'src/app/buisness/services/header.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService
    , private router: Router
    , private headerService: HeaderService) { }

  isLoggedIn$: Observable<boolean>;
  datasource: Menu[];
  url: string;
  userName: string;
  lastName: string;
  firstName: string;

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
    this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.userName = this.authenticationService.getUserName();
          this.lastName = this.authenticationService.getCurrentUser().lastName;
          this.firstName = this.authenticationService.getCurrentUser().firstName;
          if (this.userName != null && this.isLoggedIn$) {
            this.findAll(this.userName);
            this.url = event.urlAfterRedirects.substr(1, event.urlAfterRedirects.length);
          }
        }
      });
  }

  public onLogOut() {
    this.authenticationService.onLogOut();
    this.router.navigate(['login']);
  }

  public findAll(username: string) {
    this.headerService.findMenuByUser(username).subscribe(
      data => {
        this.datasource = data;
      }
    )
  }

  public getMenusChilds(parent: Menu) {
    if (this.datasource) {
      return this.datasource.filter(x => x.menu != null && x.menu.id == parent.id);
    }
    return null;
  }
}
