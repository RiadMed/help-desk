import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Observable, Subject} from "rxjs";
import {tap} from "rxjs/operators";
import {PathName} from "src/app/helpers/path-name";
import {ParentModel} from "../models/parent-model";

export abstract class GenericService<T extends ParentModel> {

  private _refreshData = new Subject<void>();

  protected constructor(private httpClient: HttpClient
    , private api_url: string) {
  }


  get refreshData() {
    return this._refreshData;
  }

  public findAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(
      this.api_url,
      {headers: new HttpHeaders({"Authorization": localStorage.getItem(PathName.TOKEN)})}
    )
  }

  public loadSorterData(sort: string, field: string): Observable<T[]> {
    return this.httpClient.get<T[]>(
      this.api_url + "/sort/" + sort + "/" + field,
      {headers: new HttpHeaders({'Authorization': localStorage.getItem(PathName.TOKEN)})}
    )
  }

  public findOne(id): Observable<T> {
    return this.httpClient.get<T>(
      this.api_url + '/' + id,
      {headers: new HttpHeaders({'Authorization': localStorage.getItem(PathName.TOKEN)})})
  }


  public saveData(model: T, editMode) {
    if (editMode) {
      return this.httpClient.put<T>(this.api_url + "/" + model.id, model,
        {headers: new HttpHeaders({'Authorization': localStorage.getItem(PathName.TOKEN)})});
    }
    else {
      return this.httpClient.post<T>(this.api_url, model,
        {headers: new HttpHeaders({'Authorization': localStorage.getItem(PathName.TOKEN)})});
    }
  }

  public saveForm(model: NgForm, id, editMode): Observable<T> {
    if (editMode) {
      return this.update(model, id);
    }
    else {
      return this.create(model);
    }
  }

  protected create(model: NgForm): Observable<T> {
    return this.httpClient.post<T>(this.api_url, model,
      {headers: new HttpHeaders({'Authorization': localStorage.getItem(PathName.TOKEN)})}
    ).pipe(
      tap(() => {
        this._refreshData.next();
      })
    );
  }

  protected update(model: NgForm, id): Observable<T> {
    return this.httpClient.put<T>(this.api_url + "/" + id, model,
      {headers: new HttpHeaders({'Authorization': localStorage.getItem(PathName.TOKEN)})}
    ).pipe(
      tap(() => {
        this._refreshData.next();
      })
    );
  }

  public deleteData(model: T) {
    return this.httpClient.delete(this.api_url + "/" + model.id,
      {headers: new HttpHeaders({'Authorization': localStorage.getItem(PathName.TOKEN)})}
    ).pipe(
      tap(() => {
        this._refreshData.next();
      })
    );
    ;
  }

  protected getHttpClient(): HttpClient {
    return this.httpClient;
  }
}
