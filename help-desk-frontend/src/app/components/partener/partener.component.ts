import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/components/common/api';
import { Partener } from 'src/app/buisness/models/partener';
import { Profession } from 'src/app/buisness/models/profession';
import { PartenerService } from 'src/app/buisness/services/partener.service';
import { ProfessionService } from 'src/app/buisness/services/profession.service';
import { GenericComponent } from '../generic-component';
import { ExcelService } from 'src/app/buisness/services/excel.service';

@Component({
  selector: 'app-partener',
  templateUrl: './partener.component.html'
})
export class PartenerComponent extends GenericComponent<Partener, PartenerService>  {

  professions: Array<Profession>;

  constructor(partenerService: PartenerService
    , messageService: MessageService
    , confirmationService: ConfirmationService
    , router: Router
    , excelService: ExcelService
    , ngxSpinnerService: NgxSpinnerService
    , private professionService: ProfessionService) {
    super(partenerService, confirmationService, messageService, ngxSpinnerService, router, excelService);
  }

  protected afterInit(): void {
    this.professionService.findAll().subscribe(
      data => {
        this.professions = data;
      })
  }
  protected loadColumns(): any[] {
    return [
      { field: 'label', header: 'Nom', pipe: 'uppercase' },
      { field: 'lastName', header: 'Prénom', pipe: 'uppercase' },
      { field: 'professionLabel', header: 'Profession', pipe: 'uppercase' }
    ];
  }
  protected afterAdd(): void {

  }

  protected afterShowDetails(_selected: Partener): void {

  }

  protected afterCancel(): void {

  }

}