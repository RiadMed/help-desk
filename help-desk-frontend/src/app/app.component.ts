import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter, map, mergeMap } from 'rxjs/operators';
import { User } from './buisness/models/user';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationService } from './buisness/services/application.service';
import { AppSettings } from './buisness/models/app-settings';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  lang: Observable<string>;
  title = 'EADN';
  currentUser: User;
  appSettings: AppSettings;
  appsName: string;
  appsTitle: string;
  appsVersion: string;
  appsCopyright: String;

  constructor(
    private router: Router
    , private spinner: NgxSpinnerService
    , private titleService: Title
    , private activatedRoute: ActivatedRoute
    , private translate: TranslateService
    , private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
    this.applicationService.refreshData.subscribe(() => {
      this.getAppsSettings();
    })
    this.getAppsSettings();

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      ).subscribe((event) => this.titleService.setTitle('EADN | ' + event['title']));
  }

  private getAppsSettings() {
    this.applicationService.findOne(1).subscribe(data => {
      this.appSettings = data;
      this.translate.setDefaultLang(this.appSettings.defaultLang);
      this.appsName = this.appSettings.label;
      this.appsTitle = this.appSettings.title;
      this.appsVersion = this.appSettings.version;
      this.appsCopyright = this.appSettings.copyright;
    });
  }

}
