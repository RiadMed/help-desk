import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MarqueService } from "src/app/buisness/services/marque.service";
import { MessageService } from "primeng/components/common/api";
import { Marque } from "src/app/buisness/models/Marque";
import { AddGenericComponent } from "../add-generic-component";
import { NgxSpinnerService } from "ngx-spinner";
import { MarqueFamily } from "src/app/buisness/models/marque-family";
import { MarqueFamilyService } from "src/app/buisness/services/marque-family.service";

@Component({
    selector: 'add-marque',
    templateUrl: './add-marque.component.html'
})
export class AddMarqueComponent extends AddGenericComponent<Marque, MarqueService> {

    @Input('items') marqueFamilyItems: Array<MarqueFamily>;
    @Input() marqueFamily: MarqueFamily;

    display: boolean;

    constructor(marqueService: MarqueService
        , messageService: MessageService
        , ngxSpinnerService: NgxSpinnerService
        , private marqueFamilyService: MarqueFamilyService) {
        super(marqueService, messageService, ngxSpinnerService);
    }

    protected afterInit(): void {
        this.display = false;
        if (this.editModel) {
            if (this.marqueFamilyItems)
                this.marqueFamily = this.marqueFamilyItems.find(x => x.id == this.model.marqueFamilyId);
        }else{
            this.marqueFamily = new MarqueFamily();
        }
    }

    protected beforSave(): void {
        this.model.marqueFamilyId = this.marqueFamily.id;
    }

    protected afterAdd(): void {
        this.model = new Marque();
    }

    protected afterSave(): void {
    }

    showDialog() {
        this.marqueFamily = new MarqueFamily();
        this.display = true;
    }
}