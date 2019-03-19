import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/components/common/api';
import { Menu } from 'src/app/buisness/models/menu';
import { ExcelService } from 'src/app/buisness/services/excel.service';
import { MenuService } from 'src/app/buisness/services/menu.service';
import { GenericComponent } from '../generic-component';

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
