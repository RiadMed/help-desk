import { EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/components/common/api";
import { ParentModel } from "../buisness/models/parent-model";
import { GenericService } from "../buisness/services/generic-service";
import { AppUtils } from "../helpers/app-utils";
import { FormGroup, NgForm } from "@angular/forms";

export abstract class AddGenericComponent<T extends ParentModel, S extends GenericService<T>> implements OnInit {

    @Input() editModel: boolean;
    @Input() addModel: boolean;
    @Input('datasource') listAll: T[];
    @Input('appModel') model: T;

    @Output() showEvent = new EventEmitter();
    @Output() pushDataEvent = new EventEmitter();

    protected appUtils: AppUtils;
    protected addForm: FormGroup;
    protected formsGroups: any[];

    blockSpecial: RegExp = /^[^<>*!]+$/;

    constructor(private service: S
        , private messageService: MessageService
        , private ngxSpinnerService: NgxSpinnerService) { }

    ngOnInit(): void {
        this.addModel = false;
        this.formsGroups = this.loadFormModels();
        if (this.editModel) {
            this.addForm = this.loadFormGroup();
        } else {
            this.addForm = this.initFormGroup();
        }
        this.afterInit();
        this.appUtils = new AppUtils(this.ngxSpinnerService, this.messageService, null);
    }

    protected abstract afterInit(): void;
    protected abstract loadFormModels(): any[];
    protected abstract initFormGroup(): FormGroup;
    protected abstract loadFormGroup(): FormGroup;
    protected abstract afterAdd(): void;
    protected abstract beforSave(): void;
    protected abstract afterSave(): void;

    public addEntity(): void {
        this.editModel = false;
        this.addModel = true;
        this.addForm = this.initFormGroup();
        this.appUtils.showInfoMessages("Mode d'écriture est activé.");
        this.afterAdd();
    }

    public saveData() {
        this.beforSave();
        let _datasource = [...this.listAll];
        this.service.saveData(this.model, this.editModel).subscribe(
            (data: T) => {
                this.model = data;
                if (!this.editModel) {
                    if (this.listAll) {
                        _datasource.push(this.model);
                        this.listAll = _datasource;
                        this.pushDataEvent.emit(this.listAll);
                    }
                }
                this.hidePanel();
                this.appUtils.loadSpinner(200);
                this.appUtils.showInfoMessages('Operation effectuée avec succès');
            }
        );
    }

    public saveDataForm(modelForm: NgForm) {
        this.beforSave();
        let _datasource = [...this.listAll];
        this.service.saveForm(modelForm).subscribe(
            (data: T) => {
                let model = data;
                if (this.listAll) {
                    _datasource.push(model);
                    this.listAll = _datasource;
                    this.pushDataEvent.emit(this.listAll);
                }
                this.hidePanel();
                this.appUtils.loadSpinner(200);
                this.appUtils.showInfoMessages('Operation effectuée avec succès');
            }
        );

    }

    protected hidePanel() {
        this.showEvent.emit(false);
    }

    private showPanel() {
        this.showEvent.emit(true);
    }

    public cancel() {
        this.appUtils.loadSpinner(200);
        this.hidePanel();
    }

    protected getService(): S {
        return this.service;
    }

}
