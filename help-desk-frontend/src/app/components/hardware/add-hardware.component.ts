import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MarqueService } from "src/app/buisness/services/marque.service";
import { MessageService } from "primeng/components/common/api";
import { Marque } from "src/app/buisness/models/Marque";
import { AddGenericComponent } from "../add-generic-component";
import { NgxSpinnerService } from "ngx-spinner";
import { Hardware } from "src/app/buisness/models/hardware";
import { HardwareService } from "src/app/buisness/services/hardware.service";
import { FormGroup } from "@angular/forms";
import { Product } from "src/app/buisness/models/Product";

@Component({
    selector: 'add-hardware',
    templateUrl: './add-hardware.component.html'
})
export class AddHardwareComponent extends AddGenericComponent<Product, HardwareService> {
    
    @Input('items') marqueItems: Array<Marque>;
    @Input() marque: Marque;

    constructor(hardwareService: HardwareService
        , messageService: MessageService
        , ngxSpinnerService: NgxSpinnerService) {
        super(hardwareService, messageService, ngxSpinnerService);
    }

    protected afterInit(): void {
        if (this.editModel) {
            this.model.date = new Date(this.model.date);
            if (this.marqueItems)
                this.marque = this.marqueItems.find(x => x.id == this.model.marqueId);
        } else {
            this.model = new Product();
            this.model.date = new Date();
            this.marque = new Marque();
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
        this.marque = new Marque();
    }

    protected afterSave(): void {
    }


}