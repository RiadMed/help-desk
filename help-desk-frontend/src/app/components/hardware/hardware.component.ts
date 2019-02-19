import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../generic-component';
import { Hardware } from 'src/app/buisness/models/hardware';
import { HardwareService } from 'src/app/buisness/services/hardware.service';
import { MessageService, ConfirmationService } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MarqueService } from 'src/app/buisness/services/marque.service';
import { Marque } from 'src/app/buisness/models/Marque';
import { ExcelService } from 'src/app/buisness/services/excel.service';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html'
})
export class HardwareComponent extends GenericComponent<Hardware, HardwareService> {

  marques: Array<Marque>;
  _marque: Marque;
  display: boolean;

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
    this.display = false;
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

  protected afterShowDetails(_selected: Hardware): void {


  }
  protected afterCancel(): void {

  }

  showDialog() {
    this._marque = new Marque();
    this.display = true;
  }

}
