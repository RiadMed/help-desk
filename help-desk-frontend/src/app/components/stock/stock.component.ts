import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/components/common/api';
import { Stock } from 'src/app/buisness/models/stock';
import { ExcelService } from 'src/app/buisness/services/excel.service';
import { StockService } from 'src/app/buisness/services/stock.service';
import { GenericComponent } from '../generic-component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html'
})
export class StockComponent extends GenericComponent<Stock, StockService> {


  constructor(stockService: StockService
    , messageService: MessageService
    , confirmationService: ConfirmationService
    , router: Router
    , excelService: ExcelService
    , ngxSpinnerService: NgxSpinnerService) {
    super(stockService, confirmationService, messageService, ngxSpinnerService, router, excelService);
  }

  protected afterInit(): void {

  }

  protected loadColumns(): any[] {
    return [
      { field: 'label', header: 'Libellé', pipe: '' },
      { field: 'dateIn', header: 'Date Achat ', pipe: 'Date' },
      { field: 'dateOut', header: 'Date Expiration', pipe: 'Date' },
      { field: 'quantity', header: 'Quantité', pipe: '', width: '15%' }
    ];
  }

  protected afterAdd(): void {
    this.selected = new Stock();
  }

  protected afterShowDetails(_selected: Stock): void {

  }

  protected afterCancel(): void {

  }

}
