import { OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ConfirmationService, MessageService } from "primeng/components/common/api";
import { ParentModel } from "../buisness/models/parent-model";
import { ExcelService } from "../buisness/services/excel.service";
import { GenericService } from "../buisness/services/generic-service";
import { AppUtils } from "../helpers/app-utils";
import { ApplicationService } from "../buisness/services/application.service";

export abstract class GenericComponent<T extends ParentModel, S extends GenericService<T>> implements OnInit {

    constructor(private service: S
        , private confirmationService: ConfirmationService
        , private messageService: MessageService
        , private ngxSpinnerService: NgxSpinnerService
        , private router: Router
        , private excelService: ExcelService) {
    }

    protected selected: T;
    protected listAll: Array<T>;
    private columns: any[];
    private totalRecords: number;
    private showDetail: boolean;
    private editMode: boolean;
    private addMode: boolean;
    private loading: boolean;
    protected loadDataOnInit: boolean;

    protected appUtils: AppUtils;
    protected display: string;

    ngOnInit(): void {
        this.loadDataOnInit = true;
        this.editMode = true;
        this.showDetail = false;
        this.addMode = false;
        this.loading = true;
        this.columns = this.loadColumns();
        this.listAll = new Array();
        this.afterInit();
        this.service.refreshData.subscribe(() => {
            if (this.loadDataOnInit)
                this.findAll();
        })
        if (this.loadDataOnInit)
            this.findAll();

        this.appUtils = new AppUtils(this.ngxSpinnerService, this.messageService, this.router);
    }

    protected abstract afterInit(): void;
    protected abstract loadColumns(): any[];

    public findAll() {
        this.service.findAll().subscribe(
            data => {
                this.listAll = data;
                this.totalRecords = data.length;
            }
        )
    }

    protected abstract afterAdd(): void;
    protected abstract afterShowDetails(_selected: T): void;
    protected abstract afterCancel(): void;

    public addEntity(): void {
        this.appUtils.loadSpinner(200);
        this.editMode = false;
        this.addMode = true;
        this.showDetail = true;
        this.afterAdd();
    }


    public showModelDetails(_selected: T): void {
        this.appUtils.loadSpinner(200);
        this.showDetail = true;
        this.editMode = true;
        this.addMode = false;
        this.selected = _selected;
        this.afterShowDetails(_selected);
    }

    public deleteData(_selected: T) {
        this.service.deleteData(_selected).subscribe(data => {
            const index: number = this.listAll.indexOf(_selected);
            this.listAll.splice(index, 1);
            this.showDetail = false;
            this.appUtils.loadSpinner(200);
            this.appUtils.showInfoMessages('Operation effectuée avec succès');
        });
    }

    public confirm(_selected: T) {
        this.confirmationService.confirm({
            message: 'Voulez vous suprimez la marque ' + _selected.id + ' - ' + _selected.label + ' ?',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            acceptLabel: 'Oui',
            rejectLabel: 'Non',
            accept: () => {
                this.deleteData(_selected);
            }
        });
    }

    public exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.listAll, 'sample');
    }


    public getColumns(): any[] {
        return this.columns;
    }

    public getEditMode(): boolean {
        return this.editMode;
    }

    public setEditMode(editMode: boolean): void {
        this.editMode = editMode;
    }

    public getShowDetail(): boolean {
        return this.showDetail;
    }

    public setShowDetail(showDetail: boolean): void {
        this.showDetail = showDetail;
    }

    public getAddMode(): boolean {
        return this.addMode;
    }

    public setAddMode(addMode: boolean): void {
        this.addMode = addMode;
    }

    public getTotalRecords(): number {
        return this.totalRecords;
    }

    public getLoading(): boolean {
        return this.loading;
    }

    protected getService(): S {
        return this.service;
    }

    protected getRouter(): Router {
        return this.router;
    }
}