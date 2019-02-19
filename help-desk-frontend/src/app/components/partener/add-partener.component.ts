import { Component, Input } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService, SelectItem } from "primeng/components/common/api";
import { Partener } from "src/app/buisness/models/partener";
import { Profession } from "src/app/buisness/models/profession";
import { PartenerService } from "src/app/buisness/services/partener.service";
import { AddGenericComponent } from "../add-generic-component";

@Component({
    selector: 'add-partener',
    templateUrl: './add-partener.component.html'
})
export class AddPartenerComponent extends AddGenericComponent<Partener, PartenerService> {

    @Input('items') professionItems: Array<Profession>;
    profession: Profession;

    constructor(partenerService: PartenerService
        , messageService: MessageService
        , ngxSpinnerService: NgxSpinnerService) {
        super(partenerService, messageService, ngxSpinnerService);
    }

    protected afterInit(): void {
        if (this.editModel) {
            if (this.professionItems)
                this.profession = this.professionItems.find(x => x.id == this.model.professionId);

        } else {
            this.model = new Partener();
            this.profession = new Profession();
        }
    }

    protected beforSave(): void {
        this.model.professionId = this.profession.id;
        this.model.professionLabel = this.profession.label;
    }


    protected afterAdd(): void {
        this.model = new Partener();
        this.profession = new Profession();
    }

    protected afterSave(): void {
    }


}
