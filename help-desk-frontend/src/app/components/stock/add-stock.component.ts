import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/components/common/api";
import { Stock } from "src/app/buisness/models/stock";
import { StockService } from "src/app/buisness/services/stock.service";
import { AddGenericComponent } from "../add-generic-component";
import { Observable, of } from "rxjs";

@Component({
    selector: 'add-stock',
    templateUrl: './add-stock.component.html'
})
export class AddStockComponent extends AddGenericComponent<Stock, StockService> {

    constructor(stockService: StockService
        , messageService: MessageService
        , ngxSpinnerService: NgxSpinnerService) {
        super(stockService, messageService, ngxSpinnerService);
    }

    protected afterInit(): void {
        if (this.editModel) {
            this.model.dateIn = new Date(this.model.dateIn);
            this.model.dateOut = new Date(this.model.dateOut);
        } else {
            this.model = new Stock();
            this.model.dateIn = new Date();
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

    }

    protected afterAdd(): void {
        this.model = new Stock();
        this.model.dateIn = new Date();
    }

    protected afterSave(): void {
    }

}
