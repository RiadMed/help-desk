import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/components/common/api';
import { Marque } from 'src/app/buisness/models/Marque';
import { MarqueFamily } from 'src/app/buisness/models/marque-family';
import { ExcelService } from 'src/app/buisness/services/excel.service';
import { MarqueFamilyService } from 'src/app/buisness/services/marque-family.service';
import { MarqueService } from 'src/app/buisness/services/marque.service';
import { GenericComponent } from '../generic-component';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html'
})
export class MarqueComponent extends GenericComponent<Marque, MarqueService> {

  marqueFamilies: Array<MarqueFamily>;
  titlePage: string = "Liste des marques";

  constructor(marqueService: MarqueService
    , messageService: MessageService
    , confirmationService: ConfirmationService
    , router: Router
    , excelService: ExcelService
    , ngxSpinnerService: NgxSpinnerService
    , private marqueFamilyService: MarqueFamilyService) {
    super(marqueService, confirmationService, messageService, ngxSpinnerService, router, excelService);

  }

  protected afterInit(): void {
    this.marqueFamilyService.findAll().subscribe(
      data => {
        this.marqueFamilies = data;
      })
  }

  protected loadColumns(): any[] {
    return [
      { field: 'label', header: 'MARQUE.COLUMN_LABEL', pipe: 'uppercase' },
      { field: 'marqueFamilyLabel', header: 'MARQUE.COLUMN_FAMILY_MARQUE', pipe: 'uppercase' }
    ];
  }

  protected afterAdd(): void {
    this.selected = new Marque();
  }

  protected afterShowDetails(_selected: Marque): void {

  }

  protected afterCancel(): void {

  }

}
