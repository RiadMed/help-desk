import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {NgxSpinnerService} from "ngx-spinner";
import {MessageService} from "primeng/components/common/api";
import {Marque} from "src/app/buisness/models/Marque";
import {Product} from "src/app/buisness/models/Product";
import {MarqueService} from "src/app/buisness/services/marque.service";
import {SoftwareService} from "src/app/buisness/services/software.service";
import {AddGenericComponent} from "../add-generic-component";
import {ModelForm} from "src/app/buisness/models/model-form";
import {DataType} from "src/app/helpers/data-type";
import {Observable, of} from "rxjs";

@Component({
  selector: 'add-software',
  templateUrl: './add-software.component.html'
})
export class AddSoftwareComponent extends AddGenericComponent<Product, SoftwareService> {

  @Input('items') marqueItems: Array<Marque>;
  @Input() marque: Marque;
  private dlgGroups: any[];
  private dlgFormGroup: FormGroup;

  @Output() showDialogEvent = new EventEmitter();
  @Output() loadFormEvent = new EventEmitter();
  @Output() loadDataEvent = new EventEmitter();

  constructor(softwareService: SoftwareService
    , messageService: MessageService
    , ngxSpinnerService: NgxSpinnerService
    , private marqueService: MarqueService
    , private formBuilder: FormBuilder) {
    super(softwareService, messageService, ngxSpinnerService);
  }

  protected afterInit(): void {

    this.marque = new Marque();
    if (this.editModel) {
      this.model.date = new Date(this.model.date);
      if (this.marqueItems)
        this.marque = this.marqueItems.find(x => x.id == this.model.marqueId);
    } else {
      this.model = new Product();
      this.model.date = new Date();
    }

  }

  protected loadFormModels(): Observable<any[]> {
    return of([
      new ModelForm("id", "COMMUN.ID", true, DataType.TEXT, true, false, null, false, "Minimum 2 caractère."),
      new ModelForm("label", "COMMUN.LABEL", true, DataType.TEXT, false, true, null, false, "Minimum 2 caractère."),
      new ModelForm("quantity", "SOFTWARE.FORM_QUANTITY", true, DataType.NUMBER, false, true, null, false, "La quantité est obligatoirs."),
      new ModelForm("date", "SOFTWARE.FORM_DATE", true, DataType.DATE, false, true, null, false, "La date est obligatoirs."),
      new ModelForm("marqueId", "SOFTWARE.FORM_MARQUE", true, DataType.SELECT, false, true, this.marqueItems, true, "Veuillez sélectionner une marque."),
      new ModelForm("icon", "SOFTWARE.FORM_ICON", false, DataType.TEXT, false, true, null, false, null)
    ]);
  }

  protected initFormGroup(): FormGroup {
    return this.formBuilder.group({
      'id': new FormControl(null),
      'label': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      'quantity': new FormControl(0, Validators.required),
      'date': new FormControl(new Date(), Validators.required),
      'icon': new FormControl(''),
      'isSoftware': new FormControl(true),
      'marqueId': new FormControl('', Validators.required)
    });
  }

  protected loadFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(this.model.id),
      label: new FormControl(this.model.label, Validators.compose([Validators.required, Validators.minLength(2)])),
      quantity: new FormControl(this.model.quantity, Validators.required),
      date: new FormControl(new Date(this.model.date), Validators.required),
      icon: new FormControl(this.model.icon),
      isSoftware: new FormControl(this.model.isSoftware),
      marqueId: new FormControl(this.model.marqueId, Validators.required)
    });
  }

  protected beforSave(): void {
    this.model.marqueId = this.marque.id;
    this.model.marqueLabel = this.marque.label;
  }

  protected afterAdd(): void {
    this.model = new Product();
    this.model.date = new Date();
  }

  protected afterSave(): void {
  }

  public showDialog() {
    this.showDialogEvent.emit(true);
    this.dlgGroups = [
      new ModelForm("label", "COMMUN.LABEL", true, DataType.TEXT, false, true, null, false, "Minimum 2 caractère.")
    ]
    this.dlgFormGroup = this.formBuilder.group({
      'label': new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      'marqueFamilyId': new FormControl(1)
    });
    this.loadFormEvent.emit(this.dlgGroups);
    this.loadDataEvent.emit(this.dlgFormGroup);
  }

}
