import { Component, OnInit, Input } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/buisness/models/menu';
import { HeaderService } from 'src/app/buisness/services/header.service';
import { AuthenticationService } from 'src/app/security/service/authentication.service';
import { ApplicationService } from 'src/app/buisness/services/application.service';
import { AppUtils } from 'src/app/helpers/app-utils';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  lang: Observable<string>;
  datasource: Menu[];
  url: string;
  userName: string;
  lastName: string;
  firstName: string;
  protected appUtils: AppUtils;
  currentLang: string = 'fr';

  @Input() title: string;

  constructor(private authenticationService: AuthenticationService
    , private router: Router
    , private headerService: HeaderService
    , private applicationService: ApplicationService
    , private ngxSpinnerService: NgxSpinnerService) { }


  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
    this.lang = this.applicationService.lang;
    this.currentLang = this.applicationService.lang.value;

    if (this.isLoggedIn$)
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
    this.appUtils = new AppUtils(this.ngxSpinnerService, null, null);
  }

  switchLanguage(language: string) {
    this.currentLang = language;
    this.applicationService.switchLanguage(language);
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

  public goWithRouter(routers: string) {
    this.appUtils.loadSpinner(200);
    this.router.navigate([routers]);
  }
}
