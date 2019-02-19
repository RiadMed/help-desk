import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../generic-component';
import { Affectation } from 'src/app/buisness/models/affectation';
import { AffectationService } from 'src/app/buisness/services/affectation.service';
import { MessageService, ConfirmationService } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Partener } from 'src/app/buisness/models/partener';
import { PartenerService } from 'src/app/buisness/services/partener.service';
import { Hardware } from 'src/app/buisness/models/hardware';
import { HardwareService } from 'src/app/buisness/services/hardware.service';
import { Software } from 'src/app/buisness/models/software';
import { SoftwareService } from 'src/app/buisness/services/software.service';
import { ExcelService } from 'src/app/buisness/services/excel.service';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html'
})
export class AffectationComponent extends GenericComponent<Affectation, AffectationService> {

  parteners: Array<Partener>;
  _partener: Partener;
  hardwares: Array<Hardware>;
  _hardware: Hardware;
  softwares: Array<Software>;
  _software: Software;

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
      this.hardwares = data.filter(x => x.amount > 0);
    });
    this.softwareService.findAll().subscribe(data => {
      this.softwares = data.filter(x => x.amount > 0);
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
