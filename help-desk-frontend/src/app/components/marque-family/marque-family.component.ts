import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../generic-component';
import { MarqueFamily } from 'src/app/buisness/models/marque-family';
import { MarqueFamilyService } from 'src/app/buisness/services/marque-family.service';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/buisness/services/excel.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/primeng';

@Component({
  selector: 'app-marque-family',
  templateUrl: './marque-family.component.html'
})
export class MarqueFamilyComponent extends GenericComponent<MarqueFamily, MarqueFamilyService> {


  constructor(marqueFamilyService: MarqueFamilyService
    , messageService: MessageService
    , confirmationService: ConfirmationService
    , router: Router
    , excelService: ExcelService
    , ngxSpinnerService: NgxSpinnerService) {
    super(marqueFamilyService, confirmationService, messageService, ngxSpinnerService, router, excelService);
  }

  protected afterInit(): void {

  }
  protected loadColumns(): any[] {
    return [
      { field: 'label', header: 'Libellé', pipe: 'uppercase' }
    ];
  }

  protected afterAdd(): void {
    this.selected = new MarqueFamily();
  }
  protected afterShowDetails(_selected: MarqueFamily): void {

  }
  protected afterCancel(): void {

  }



}
