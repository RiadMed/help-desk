import { Component } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/components/common/api";
import { Menu } from "src/app/buisness/models/menu";
import { Software } from "src/app/buisness/models/software";
import { SoftwareService } from "src/app/buisness/services/software.service";
import { AddGenericComponent } from "../add-generic-component";
import { Stock } from "src/app/buisness/models/stock";
import { StockService } from "src/app/buisness/services/stock.service";

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

    protected beforSave(): void {

    }

    protected afterAdd(): void {
        this.model = new Stock();
        this.model.dateIn = new Date();
    }

    protected afterSave(): void {
    }

}
