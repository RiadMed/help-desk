import { Component } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/components/common/api";
import { MarqueFamily } from "src/app/buisness/models/marque-family";
import { MarqueFamilyService } from "src/app/buisness/services/marque-family.service";
import { AddGenericComponent } from "../add-generic-component";

@Component({
    selector: 'add-marque-family',
    templateUrl: './add-marque-family.component.html'
})
export class AddMarqueFamilyComponent extends AddGenericComponent<MarqueFamily, MarqueFamilyService> {

    constructor(marqueFamilyService: MarqueFamilyService
        , messageService: MessageService
        , ngxSpinnerService: NgxSpinnerService) {
        super(marqueFamilyService, messageService, ngxSpinnerService);
    }

    protected afterInit(): void {
    }

    protected beforSave(): void {

    }

    protected afterAdd(): void {
        this.model = new MarqueFamily();
    }

    protected afterSave(): void {
    }

}
