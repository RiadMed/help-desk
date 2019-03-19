import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/components/common/api";
import { Marque } from "src/app/buisness/models/Marque";
import { Product } from "src/app/buisness/models/Product";
import { MarqueService } from "src/app/buisness/services/marque.service";
import { SoftwareService } from "src/app/buisness/services/software.service";
import { AddGenericComponent } from "../add-generic-component";

@Component({
    selector: 'add-software',
    templateUrl: './add-software.component.html'
})
export class AddSoftwareComponent extends AddGenericComponent<Product, SoftwareService> {

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
            this.model.date = new Date(this.model.date);
            if (this.marqueItems)
                this.marque = this.marqueItems.find(x => x.id == this.model.marqueId);
        } else {
            this.model = new Product();
            this.model.date = new Date();
        }
    }

    protected loadFormModels(): any[] {
        return [];
    }
    protected initFormGroup(): FormGroup {
        return null;
    }
    protected loadFormGroup(): FormGroup {
        return null;
    }

    protected beforSave(): void {
        this.model.marqueId = this.marque.id;
        this.model.marqueLabel = this.marque.label;
    }

    protected afterAdd(): void {
        this.model = new Product();
        this.model.date = new Date();
        }

    protected afterSave(): void {
    }

    showDialog() {
        this.marque = new Marque();
        this.display = true;
    }

}
