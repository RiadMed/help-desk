import { Component, Input } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/components/common/api";
import { Affectation } from "src/app/buisness/models/affectation";
import { Hardware } from "src/app/buisness/models/hardware";
import { Partener } from "src/app/buisness/models/partener";
import { AffectationService } from "src/app/buisness/services/affectation.service";
import { PartenerService } from "src/app/buisness/services/partener.service";
import { AddGenericComponent } from "../add-generic-component";
import { HardwareService } from "src/app/buisness/services/hardware.service";
import { Product } from "src/app/buisness/models/Product";
import { SoftwareService } from "src/app/buisness/services/software.service";
import { FormGroup } from "@angular/forms";
import { Observable, of } from "rxjs";

@Component({
    selector: 'add-affectation',
    templateUrl: './add-affectation.component.html'
})
export class AddAffectationComponent extends AddGenericComponent<Affectation, AffectationService> {


    @Input('itemsPartener') partenerItems: Array<Partener>;
    @Input() partener: Partener;
    @Input('itemsHardware') hardwareItems: Array<Hardware>;
    @Input() hardware: Hardware;
    @Input('itemsSoftware') softwareItems: Array<Product>;
    @Input() software: Product;
    hasHardware: boolean;
    hasSoftware: boolean;

    constructor(affectationService: AffectationService
        , messageService: MessageService
        , ngxSpinnerService: NgxSpinnerService
        , private hardwareService: HardwareService
        , private softwareService: SoftwareService) {
        super(affectationService, messageService, ngxSpinnerService);
    }

    protected afterInit(): void {
        if (this.editModel) {
            this.model.date = new Date(this.model.date);
            this.partener = this.partenerItems.find(x => x.id == this.model.partenerId);
        } else {
            this.initValues();
        }
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

    protected beforSave(): void {
        this.model.partenerId = this.partener.id;
        this.model.partenerLabel = this.partener.label;
        this.model.partenerLastName = this.partener.lastName;
    }


    public saveAffectData() {
        let afect: Affectation = null;
        // if (this.hasHardware)
        //     afect = this.listAll.find(x => x.serialNumber == this.model.serialNumber);
        if (afect != null) {
            this.appUtils.showErrorMessages("Ce Numéro de série est déja affecté.");
        } else {
            this.beforSave();
            let _datasource = [...this.listAll];
            this.getService().saveAffectData(this.model).subscribe(
                (data: Affectation) => {
                    this.model = data;
                    if (!this.editModel) {
                        _datasource.push(this.model);
                        this.listAll = _datasource;
                        this.pushDataEvent.emit(this.listAll);
                    }
                    this.hidePanel();
                    this.appUtils.loadSpinner(200);
                    this.appUtils.showInfoMessages('Operation effectuée avec succès');
                }
            );
        }
    }

    protected afterAdd(): void {
        this.initValues();
    }

    private initValues() {
        this.model = new Affectation();
        this.model.date = new Date();
        this.hasSoftware = false;
        this.hasHardware = false;
        this.hardware = new Hardware();
        this.software = new Product();
        this.partener = new Partener();
    }

    protected afterSave(): void {

    }

}