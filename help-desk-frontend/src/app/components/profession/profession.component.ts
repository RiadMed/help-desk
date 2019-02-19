import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../generic-component';
import { Profession } from 'src/app/buisness/models/profession';
import { ProfessionService } from 'src/app/buisness/services/profession.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/components/common/api';
import { ExcelService } from 'src/app/buisness/services/excel.service';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html'
})
export class ProfessionComponent extends GenericComponent<Profession, ProfessionService>  {

  constructor(professionService: ProfessionService
    , messageService: MessageService
    , confirmationService: ConfirmationService
    , router: Router
    , excelService: ExcelService
    , ngxSpinnerService: NgxSpinnerService) {
    super(professionService, confirmationService, messageService, ngxSpinnerService, router, excelService);
  }

  protected afterInit(): void {

  }
  protected loadColumns(): any[] {
    return [
      { field: 'label', header: 'Libellé', pipe: 'uppercase' }
    ];
  }

  protected afterAdd(): void {
    this.selected = new Profession();
  }
  protected afterShowDetails(_selected: Profession): void {

  }
  protected afterCancel(): void {

  }



}
