import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MarqueService } from "src/app/buisness/services/marque.service";
import { MessageService } from "primeng/components/common/api";
import { Marque } from "src/app/buisness/models/Marque";
import { AddGenericComponent } from "../add-generic-component";
import { NgxSpinnerService } from "ngx-spinner";
import { Hardware } from "src/app/buisness/models/hardware";
import { HardwareService } from "src/app/buisness/services/hardware.service";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Product } from "src/app/buisness/models/Product";
import { Observable, of } from "rxjs";
import { ModelForm } from "src/app/buisness/models/model-form";
import { DataType } from "src/app/helpers/data-type";

@Component({
    selector: 'add-hardware',
    templateUrl: './add-hardware.component.html'
})
export class AddHardwareComponent extends AddGenericComponent<Product, HardwareService> {

    @Input('items') marqueItems: Array<Marque>;
    @Input() marque: Marque;

    constructor(hardwareService: HardwareService
        , messageService: MessageService
        , ngxSpinnerService: NgxSpinnerService
        , private formBuilder: FormBuilder) {
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

    protected loadFormModels(): Observable<any[]> {
        return of([
            new ModelForm("id", "COMMUN.ID", true, DataType.TEXT, true, false, null, false, "Minimum 2 caractère."),
            new ModelForm("label", "COMMUN.LABEL", true, DataType.TEXT, false, true, null, false, "Minimum 2 caractère."),
            new ModelForm("quantity", "HARDWARE.FORM_QUANTITY", true, DataType.NUMBER, false, true, null, false, "La quantité est obligatoirs."),
            new ModelForm("date", "HARDWARE.FORM_DATE", true, DataType.DATE, false, true, null, false, "La date est obligatoirs."),
            new ModelForm("marqueId", "HARDWARE.FORM_MARQUE", true, DataType.SELECT, false, true, this.marqueItems, true, "Veuillez sélectionner une marque.")
        ]);
    }
    protected initFormGroup(): FormGroup {
        return this.formBuilder.group({
            'id': new FormControl(null),
            'label': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
            'quantity': new FormControl(0, Validators.required),
            'date': new FormControl(new Date(), Validators.required),
            'isSoftware': new FormControl(false),
            'marqueId': new FormControl('', Validators.required)
        });
    }
    protected loadFormGroup(): FormGroup {
        return new FormGroup({
            id: new FormControl(this.model.id),
            label: new FormControl(this.model.label, Validators.compose([Validators.required, Validators.minLength(2)])),
            quantity: new FormControl(this.model.quantity, Validators.required),
            date: new FormControl(new Date(this.model.date), Validators.required),
            isSoftware: new FormControl(this.model.isSoftware),
            marqueId: new FormControl(this.model.marqueId, Validators.required)
        });
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