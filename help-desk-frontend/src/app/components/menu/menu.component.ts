import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../generic-component';
import { Menu } from 'src/app/buisness/models/menu';
import { MenuService } from 'src/app/buisness/services/menu.service';
import { MessageService, ConfirmationService } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExcelService } from 'src/app/buisness/services/excel.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent extends GenericComponent<Menu, MenuService>  {

  constructor(menuService: MenuService
    , messageService: MessageService
    , confirmationService: ConfirmationService
    , router: Router
    , excelService: ExcelService
    , ngxSpinnerService: NgxSpinnerService) {
    super(menuService, confirmationService, messageService, ngxSpinnerService, router, excelService);
  }

  protected afterInit(): void {

  }
  protected loadColumns(): any[] {
    return [
      { field: 'label', header: 'Libellé' },
      { field: 'routers', header: '/Root' }
    ];

  }
  protected afterAdd(): void {
    this.selected = new Menu();
  }
  protected afterShowDetails(_selected: Menu): void {

  }

  protected afterCancel(): void {

  }

}
