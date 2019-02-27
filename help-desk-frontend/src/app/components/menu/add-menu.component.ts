import { Component } from "@angular/core";
import { Menu } from "src/app/buisness/models/menu";
import { MenuService } from "src/app/buisness/services/menu.service";
import { MessageService } from "primeng/components/common/api";
import { NgxSpinnerService } from "ngx-spinner";
import { AddGenericComponent } from "../add-generic-component";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'add-menu',
    templateUrl: './add-menu.component.html'
})
export class AddMenuComponent extends AddGenericComponent<Menu, MenuService> {

    constructor(menuService: MenuService
        , messageService: MessageService
        , ngxSpinnerService: NgxSpinnerService) {
        super(menuService, messageService, ngxSpinnerService);
    }

    protected afterInit(): void {
    }

    protected loadFormModels(): any[] {
        return [];
    }
    protected initFormGroup(): FormGroup {
        return null;
    }
    protected loadFormGroup(): FormGroup {
        return null;
    }

    protected beforSave(): void {

    }

    protected afterAdd(): void {
        this.model = new Menu();
    }

    protected afterSave(): void {
    }

}
