import { Component, Input } from "@angular/core";
import { FormBuilder, FormControl, Validators, FormGroup } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/components/common/api";
import { Marque } from "src/app/buisness/models/Marque";
import { Software } from "src/app/buisness/models/software";
import { SoftwareService } from "src/app/buisness/services/software.service";
import { AddGenericComponent } from "../add-generic-component";
import { MarqueService } from "src/app/buisness/services/marque.service";

@Component({
    selector: 'add-software',
    templateUrl: './add-software.component.html'
})
export class AddSoftwareComponent extends AddGenericComponent<Software, SoftwareService> {

    @Input('items') marqueItems: Array<Marque>;
    @Input() marque: Marque;
    dateUpdate: Date;
    _validateDate: Date;
    display: boolean;

    constructor(softwareService: SoftwareService
        , messageService: MessageService
        , ngxSpinnerService: NgxSpinnerService
        , private marqueService: MarqueService) {
        super(softwareService, messageService, ngxSpinnerService);
    }

    protected afterInit(): void {
        this.display = false;
        this.marque = new Marque();
        if (this.editModel) {
            this.model.acquisitionDate = new Date(this.model.acquisitionDate);
            this.model.validateDate = new Date(this.model.validateDate);
            if (this.marqueItems)
                this.marque = this.marqueItems.find(x => x.id == this.model.marqueId);
        } else {
            this.model = new Software();
            this.model.acquisitionDate = new Date();
            this.model.validateDate = new Date();
        }
    }

    protected beforSave(): void {
        this.model.marqueId = this.marque.id;
        this.model.marqueLabel = this.marque.label;
    }

    protected afterAdd(): void {
        this.model = new Software();
        this.model.acquisitionDate = new Date();
        this.model.validateDate = new Date();
    }

    protected afterSave(): void {
    }

    showDialog() {
        this.marque = new Marque();
        this.display = true;
    }

}
