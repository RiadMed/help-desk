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
import { Software } from "src/app/buisness/models/software";
import { SoftwareService } from "src/app/buisness/services/software.service";

@Component({
    selector: 'add-affectation',
    templateUrl: './add-affectation.component.html'
})
export class AddAffectationComponent extends AddGenericComponent<Affectation, AffectationService> {


    @Input('itemsPartener') partenerItems: Array<Partener>;
    @Input() partener: Partener;
    @Input('itemsHardware') hardwareItems: Array<Hardware>;
    @Input() hardware: Hardware;
    @Input('itemsSoftware') softwareItems: Array<Software>;
    @Input() software: Software;
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
            this.model.validationDate = new Date(this.model.validationDate);
            this.partener = this.partenerItems.find(x => x.id == this.model.partenerId);

            if (this.model.hardwareId) {
                this.hasHardware = true;
                this.hardware = this.hardwareItems.find(hard => hard.id == this.model.hardwareId);
            }
            if (this.model.softwareId) {
                this.software = this.softwareItems.find(soft => soft.id == this.model.softwareId);
                this.hasSoftware = true;
            }

        } else {
            this.initValues();
        }
    }

    protected beforSave(): void {

        if (this.hasSoftware) {
            this.model.softwareId = this.software.id;
            this.model.softwareLabel = this.software.label;
            this.model.softwareAmount = this.software.amount - 1;
        }
        if (this.hasHardware) {
            this.model.hardwareId = this.hardware.id;
            this.model.hardwareLabel = this.hardware.label;
            this.model.hardwareAmount = this.hardware.amount - 1;

        }
        this.model.partenerId = this.partener.id;
        this.model.partenerLabel = this.partener.label;
        this.model.partenerLastName = this.partener.lastName;
    }


    public saveAffectData() {
        let afect: Affectation = null;
        if (this.hasHardware)
            afect = this.listAll.find(x => x.serialNumber == this.model.serialNumber);
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
        this.model.validationDate = new Date();
        this.hasSoftware = false;
        this.hasHardware = false;
        this.hardware = new Hardware();
        this.software = new Software();
        this.partener = new Partener();
    }

    protected afterSave(): void {

    }

}