import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { GenericComponent } from '../generic-component';
import { MarqueService } from 'src/app/buisness/services/marque.service';
import { Marque } from 'src/app/buisness/models/Marque';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExcelService } from 'src/app/buisness/services/excel.service';
import { MarqueFamily } from 'src/app/buisness/models/marque-family';
import { MarqueFamilyService } from 'src/app/buisness/services/marque-family.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html'
})
export class MarqueComponent extends GenericComponent<Marque, MarqueService> {

  marqueFamilies: Array<MarqueFamily>;
  _marqueFamily: MarqueFamily;


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
      { field: 'label', header: 'Libellé', pipe: 'uppercase' },
      { field: 'marqueFamilyLabel', header: 'Famille', pipe: 'uppercase' }
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
