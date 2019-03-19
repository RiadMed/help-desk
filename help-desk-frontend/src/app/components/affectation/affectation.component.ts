import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/components/common/api';
import { Affectation } from 'src/app/buisness/models/affectation';
import { Partener } from 'src/app/buisness/models/partener';
import { Product } from 'src/app/buisness/models/Product';
import { AffectationService } from 'src/app/buisness/services/affectation.service';
import { ExcelService } from 'src/app/buisness/services/excel.service';
import { HardwareService } from 'src/app/buisness/services/hardware.service';
import { PartenerService } from 'src/app/buisness/services/partener.service';
import { SoftwareService } from 'src/app/buisness/services/software.service';
import { GenericComponent } from '../generic-component';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html'
})
export class AffectationComponent extends GenericComponent<Affectation, AffectationService> {

  parteners: Array<Partener>;
  _partener: Partener;
  hardwares: Array<Product>;
  _hardware: Product;
  softwares: Array<Product>;
  _software: Product;

  rowGroupMetadata: any;

  constructor(affectationService: AffectationService
    , messageService: MessageService
    , confirmationService: ConfirmationService
    , router: Router
    , ngxSpinnerService: NgxSpinnerService
    , excelService: ExcelService
    , private partenerService: PartenerService
    , private hardwareService: HardwareService
    , private softwareService: SoftwareService) {
    super(affectationService, confirmationService, messageService, ngxSpinnerService, router, excelService);

  }

  protected afterInit(): void {
    this.loadDataOnInit = false;
    this.findAllAffectation();
    this.partenerService.findAll().subscribe(data => {
      this.parteners = data;
    });
    this.hardwareService.findAll().subscribe(data => {
      this.hardwares = data.filter(x => x.quantity > 0);
    });
    this.softwareService.findAll().subscribe(data => {
      this.softwares = data.filter(x => x.quantity > 0);
    })

  }

  public findAllAffectation() {
    this.getService().findAll().subscribe(
      data => {
        this.listAll = data;
      }
    )
  }


  protected loadColumns(): any[] {
    return [
      { field: 'partenerLabel', header: 'Affecter à', pipe: '' },
      { field: 'hardwareLabel', header: 'Matériel', pipe: '' },
      { field: 'serialNumber', header: 'N° de série', pipe: '' },
      { field: 'softwareLabel', header: 'Logiciel', pipe: '' },
      { field: 'key', header: 'Clé', pipe: '' },
      { field: 'date', header: 'Date ', pipe: 'Date' }
    ];
  }

  protected afterAdd(): void {
    this.selected = new Affectation();
  }

  protected afterShowDetails(_selected: Affectation): void {

  }

  protected afterCancel(): void {

  }

}
