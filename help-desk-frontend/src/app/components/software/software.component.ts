import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/components/common/api';
import { Marque } from 'src/app/buisness/models/Marque';
import { ExcelService } from 'src/app/buisness/services/excel.service';
import { MarqueService } from 'src/app/buisness/services/marque.service';
import { SoftwareService } from 'src/app/buisness/services/software.service';
import { GenericComponent } from '../generic-component';
import { Product } from 'src/app/buisness/models/Product';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html'
})
export class SoftwareComponent extends GenericComponent<Product, SoftwareService> {

  marques: Array<Marque>;
  _marque: Marque;

  constructor(softwareService: SoftwareService
    , messageService: MessageService
    , confirmationService: ConfirmationService
    , router: Router
    , excelService: ExcelService
    , ngxSpinnerService: NgxSpinnerService
    , private marqueService: MarqueService) {
    super(softwareService, confirmationService, messageService, ngxSpinnerService, router, excelService);
  }


  protected afterInit(): void {
    this.marqueService.findAll().subscribe(
      data => {
        this.marques = data.filter(x => x.marqueFamilyId == 1);
      })
  }
  protected loadColumns(): any[] {
    return [
      { field: 'label', header: 'Libellé', pipe: 'uppercase' },
      { field: 'marqueLabel', header: 'Marque', pipe: 'uppercase' },
      { field: 'amount', header: 'Quantité', width: '15%', pipe: '' },
      { field: 'acquisitionDate', header: 'Date', pipe: 'Date' },
      { field: 'validateDate', header: 'Date de validité', pipe: 'Date' }
    ];
  }
  protected afterAdd(): void {
    this.listAll = this.listAll.filter(x => x.isSoftware !== null && x.isSoftware);
  }
  protected afterShowDetails(_selected: Product): void {

  }
  protected afterCancel(): void {

  }



}
