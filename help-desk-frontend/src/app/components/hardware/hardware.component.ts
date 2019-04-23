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
import { ModelColumn } from 'src/app/buisness/models/model-column';
import { DataType } from 'src/app/helpers/data-type';

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
    this.marqueService.findAll().subscribe(
      data => {
        this.marques = data.filter(x => x.marqueFamilyId == 2);
      });
    this.loadDataOnInit = false;
    this.getService().refreshData.subscribe(() => {
      this.loadAllHard();
    });
    this.loadAllHard();
  }

  private loadAllHard() {
    this.getService().findByType(1).subscribe(data => {
      this.listAll = data;
      this.totalRecords = data.length;
    })
  }

  protected loadColumns(): ModelColumn[] {
    return [
      new ModelColumn('id', 'COMMUN.ID', DataType.NUMBER, '4em'),
      new ModelColumn('label', 'COMMUN.LABEL', DataType.TEXT, '25%'),
      new ModelColumn('marqueLabel', 'HARDWARE.FORM_MARQUE', DataType.TEXT, '20%'),
      new ModelColumn('quantity', 'HARDWARE.FORM_QUANTITY', DataType.NUMBER, '10%'),
      new ModelColumn('date', 'HARDWARE.FORM_DATE', DataType.DATE, '15%')
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
