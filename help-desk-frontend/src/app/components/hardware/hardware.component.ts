import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/components/common/api';
import { Hardware } from 'src/app/buisness/models/hardware';
import { Marque } from 'src/app/buisness/models/Marque';
import { Product } from 'src/app/buisness/models/Product';
import { ExcelService } from 'src/app/buisness/services/excel.service';
import { HardwareService } from 'src/app/buisness/services/hardware.service';
import { MarqueService } from 'src/app/buisness/services/marque.service';
import { GenericComponent } from '../generic-component';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html'
})
export class HardwareComponent extends GenericComponent<Product, HardwareService> {

  marques: Array<Marque>;
  _marque: Marque;
  displayDlg: boolean;

  constructor(hardwareService: HardwareService
    , messageService: MessageService
    , confirmationService: ConfirmationService
    , router: Router
    , excelService: ExcelService
    , ngxSpinnerService: NgxSpinnerService
    , private marqueService: MarqueService) {
    super(hardwareService, confirmationService, messageService, ngxSpinnerService, router, excelService);

  }

  protected afterInit(): void {
    this.displayDlg = false;
    this.listAll = this.listAll.filter(x => x.isSoftware !== null && !x.isSoftware);
    this.marqueService.findAll().subscribe(
      data => {
        this.marques = data.filter(x => x.marqueFamilyId == 2);
      })
  }
  protected loadColumns(): any[] {
    return [
      { field: 'label', header: 'Libellé', pipe: 'uppercase' },
      { field: 'marqueLabel', header: 'Marque', pipe: 'string' },
      { field: 'amount', header: 'Quantité', width: '15%', pipe: '' },
      { field: 'acquisitionDate', header: 'Date', pipe: 'Date' }
    ];
  }
  protected afterAdd(): void {
  }

  protected afterShowDetails(_selected: Product): void {


  }
  protected afterCancel(): void {

  }

  showDialog() {
    this._marque = new Marque();
    this.displayDlg = true;
  }

}
