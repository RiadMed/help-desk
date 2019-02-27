import { Component, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/components/common/api";
import { Marque } from "src/app/buisness/models/Marque";
import { MarqueFamily } from "src/app/buisness/models/marque-family";
import { ModelForm } from "src/app/buisness/models/model-form";
import { MarqueService } from "src/app/buisness/services/marque.service";
import { AddGenericComponent } from "../add-generic-component";

@Component({
    selector: 'add-marque',
    templateUrl: './add-marque.component.html'
})
export class AddMarqueComponent extends AddGenericComponent<Marque, MarqueService> {

    @Input('items') marqueFamilyItems: Array<MarqueFamily>;

    display: boolean;
    dlgGroups: any[];
    dlgFormGroup: FormGroup;

    constructor(marqueService: MarqueService
        , messageService: MessageService
        , ngxSpinnerService: NgxSpinnerService
        , private formBuilder: FormBuilder) {
        super(marqueService, messageService, ngxSpinnerService);
    }

    protected afterInit(): void {
        this.display = false;
    }

    protected loadFormModels(): any[] {
        return [
            new ModelForm("label", "Libellé", true, "text", false, null, false, "Minimum 2 caractère."),
            new ModelForm("marqueFamilyId", "Famille de marque", true, "select", false, this.marqueFamilyItems, true, "Veuillez sélectionner la famille de marque.")
        ]
    }

    protected initFormGroup(): FormGroup {
        return this.formBuilder.group({
            'label': new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
            'marqueFamilyId': new FormControl('', Validators.required)
        });
    }
    protected loadFormGroup(): FormGroup {
        return new FormGroup({
            label: new FormControl(this.model.label, Validators.compose([Validators.required, Validators.minLength(2)])),
            marqueFamilyId: new FormControl(this.model.marqueFamilyId, Validators.required)
        });
    }

    protected beforSave(): void {
    }

    protected afterAdd(): void {
        this.model = new Marque();
    }

    protected afterSave(): void {
    }

    showDialog() {
        this.dlgGroups = [
            new ModelForm("label", "Libellé", true, "text", false, null, false, "Minimum 2 caractère.")
        ]

        this.dlgFormGroup = this.formBuilder.group({
            'label': new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
        });

        this.display = true;
    }
}