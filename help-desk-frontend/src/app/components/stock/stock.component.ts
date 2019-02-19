import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../generic-component';
import { Stock } from 'src/app/buisness/models/stock';
import { StockService } from 'src/app/buisness/services/stock.service';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/components/common/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExcelService } from 'src/app/buisness/services/excel.service';

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
