import { Component } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/components/common/api";
import { Profession } from "src/app/buisness/models/profession";
import { ProfessionService } from "src/app/buisness/services/profession.service";
import { AddGenericComponent } from "../add-generic-component";
import { FormGroup } from "@angular/forms";
import { Observable, of } from "rxjs";

@Component({
    selector: 'add-profession',
    templateUrl: './add-profession.component.html'
})
export class AddProfessionComponent extends AddGenericComponent<Profession, ProfessionService> {

    constructor(professionService: ProfessionService
        , messageService: MessageService
        , ngxSpinnerService: NgxSpinnerService) {
        super(professionService, messageService, ngxSpinnerService);
    }

    protected loadFormModels(): Observable<any[]> {
        return of([]);
    }
    
    protected initFormGroup(): FormGroup {
        return null;
    }
    protected loadFormGroup(): FormGroup {
        return null;
    }

    protected afterInit(): void {
    }

    protected beforSave(): void {

    }

    protected afterAdd(): void {
        this.model = new Profession();
    }

    protected afterSave(): void {
    }

}
