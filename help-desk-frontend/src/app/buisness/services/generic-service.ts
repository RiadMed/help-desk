import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { PathName } from "src/app/helpers/path-name";
import { ParentModel } from "../models/parent-model";
import { Observable } from "rxjs";
import { ItemSelect } from "../models/item-select";
import { SelectItem } from "primeng/components/common/api";

export abstract class GenericService<T extends ParentModel> {

    constructor(private httpClient: HttpClient
        , private api_url: string) { }


    public findAll(): Observable<T[]> {
        return this.httpClient.get<T[]>(
            this.api_url,
            { headers: new HttpHeaders({ 'Authorization': localStorage.getItem(PathName.TOKEN) }) }
        )
    }

    public getItemList(items_url: string): Observable<Array<SelectItem>> {
        return this.httpClient.get<Array<SelectItem>>(items_url + "/items",
            { headers: new HttpHeaders({ 'Authorization': localStorage.getItem(PathName.TOKEN) }) })
    }

    public findOne(id: number): Observable<T> {
        return this.httpClient.get<T>(
            this.api_url + '/' + id,
            { headers: new HttpHeaders({ 'Authorization': localStorage.getItem(PathName.TOKEN) }) }
        )
    }

    public saveData(model: T, editMode: boolean) {
        if (editMode) {
            return this.httpClient.put<T>(this.api_url + "/" + model.id, model, { headers: new HttpHeaders({ 'Authorization': localStorage.getItem(PathName.TOKEN) }) });
        }
        else {
            return this.httpClient.post<T>(this.api_url, model, { headers: new HttpHeaders({ 'Authorization': localStorage.getItem(PathName.TOKEN) }) });
        }
    }

    public deleteData(model: T) {
        return this.httpClient.delete(this.api_url + "/" + model.id, { headers: new HttpHeaders({ 'Authorization': localStorage.getItem(PathName.TOKEN) }) });
    }

    protected getHttpClient(): HttpClient {
        return this.httpClient;
    }
}
