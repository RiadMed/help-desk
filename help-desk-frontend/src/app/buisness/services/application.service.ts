import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { API_URLS } from 'src/app/helpers/api.url';
import { PathName } from 'src/app/helpers/path-name';
import { AppSettings } from '../models/app-settings';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private _appSetting: AppSettings;
  private _refreshData = new Subject<void>();
  lang: BehaviorSubject<string> = new BehaviorSubject<string>('fr');

  constructor(private httpClient: HttpClient, private translate: TranslateService) { }

  get refreshData() {
    return this._refreshData;
  }

  public findOne(id: number): Observable<AppSettings> {
    return this.httpClient.get<AppSettings>(API_URLS.SETTINGS_API + '/' + id)
  }

  public saveForm(model: NgForm, id: number) {
    return this.httpClient.put<AppSettings>(API_URLS.SETTINGS_API + '/' + id, model,
      { headers: new HttpHeaders({ 'Authorization': localStorage.getItem(PathName.TOKEN) }) }
    ).pipe(
      tap(() => {
        this._refreshData.next();
      })
    );

  }

  setLoggedIn(lang: string): void {
    return this.lang.next(lang);
  }

  switchLanguage(language: string) {
    this.lang.next(language)
    this.translate.use(this.lang.value);
  }

  get appSetting(): AppSettings {
    return this._appSetting;

  }
}
