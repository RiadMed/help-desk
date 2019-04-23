import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {ConfirmationService, MessageService} from 'primeng/components/common/api';
import {Marque} from 'src/app/buisness/models/Marque';
import {ModelColumn} from 'src/app/buisness/models/model-column';
import {Product} from 'src/app/buisness/models/Product';
import {ExcelService} from 'src/app/buisness/services/excel.service';
import {MarqueService} from 'src/app/buisness/services/marque.service';
import {SoftwareService} from 'src/app/buisness/services/software.service';
import {DataType} from 'src/app/helpers/data-type';
import {GenericComponent} from '../generic-component';
import {ModelForm} from "../../buisness/models/model-form";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html'
})
export class SoftwareComponent extends GenericComponent<Product, SoftwareService> {

  _marque: Marque;
  display: boolean;
  marquesList: Array<Marque>;
  dlgGroups: any[];
  dlgFormGroup: FormGroup;

  protected afterInit(): void {
    this.display = false;
    this.marqueService.refreshData.subscribe(() => {
      this.loadMarquesItems();
    })
    this.loadMarquesItems();

    this.loadDataOnInit = false;
    this.getService().refreshData.subscribe(() => {
      this.loadAllSoft();
    });
    this.loadAllSoft();
  }

  constructor(softwareService: SoftwareService
    , messageService: MessageService
    , confirmationService: ConfirmationService
    , router: Router
    , excelService: ExcelService
    , ngxSpinnerService: NgxSpinnerService
    , private marqueService: MarqueService
    , private formBuilder: FormBuilder) {
    super(softwareService, confirmationService, messageService, ngxSpinnerService, router, excelService);
  }

  private loadAllSoft() {
    this.getService().findByType(1).subscribe(data => {
      this.listAll = data;
      this.totalRecords = data.length;
    })
  }

  private loadMarquesItems() {
    this.marqueService.findAll().subscribe(
      data => {
        this.marquesList = data.filter(x => x.marqueFamilyId === 1);
      })
  }

  protected loadColumns(): ModelColumn[] {
    return [
      new ModelColumn('id', 'COMMUN.ID', DataType.NUMBER, '4em'),
      new ModelColumn('label', 'COMMUN.LABEL', DataType.TEXT, '25%'),
      new ModelColumn('marqueLabel', 'SOFTWARE.FORM_MARQUE', DataType.TEXT, '20%'),
      new ModelColumn('quantity', 'SOFTWARE.FORM_QUANTITY', DataType.NUMBER, '10%'),
      new ModelColumn('date', 'SOFTWARE.FORM_DATE', DataType.DATE, '15%'),
      new ModelColumn('icon', 'SOFTWARE.FORM_ICON', DataType.ICONS, '10%')
    ];
  }

  protected afterAdd(): void {
    this.listAll = this.listAll.filter(x => x.isSoftware !== null && x.isSoftware);
  }

  protected afterShowDetails(_selected: Product): void {

  }

  protected afterCancel(): void {

  }


  showDialog() {
    this.dlgGroups = [
      new ModelForm("label", "COMMUN.LABEL", true, DataType.TEXT, false, true, null, false, "Minimum 2 caractère.")
    ]
    this.dlgFormGroup = this.formBuilder.group({
      'label': new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      'marqueFamilyId': new FormControl(1)
    });
    this.display = true;
  }
}
