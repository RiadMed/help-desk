import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ParentModel } from 'src/app/buisness/models/parent-model';
import { GenericService } from 'src/app/buisness/services/generic-service';
import { AppUtils } from 'src/app/helpers/app-utils';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/primeng';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html'
})
export class AddDialogComponent<T extends ParentModel, S extends GenericService<T>> implements OnInit {

  @Input() dialogform: FormGroup;
  existLine: boolean;

  @Input('datasource') listAll: Array<T>;
  @Input('appModel') model: T;
  @Input() showDialog: boolean;
  @Input() service: S;
  @Input() formsGroups: any[];

  @Output() pushDataEvent = new EventEmitter();
  @Output() pushModelEvent = new EventEmitter();
  @Output() hideDialogEvent = new EventEmitter();

  protected appUtils: AppUtils;

  constructor(private formBuilder: FormBuilder
    , private ngxSpinnerService: NgxSpinnerService
    , private messageService: MessageService) { }

  ngOnInit() {
    this.appUtils = new AppUtils(this.ngxSpinnerService, this.messageService, null);
  }

  public saveDataForm(dlgForm: NgForm) {
    this.model.label = this.dialogform.get('label').value;
    let _datasource = [...this.listAll];
    let _model = _datasource.find(x => x.label.toLowerCase() == this.model.label.toLowerCase());
    this.existLine = _model != null;
    if (!this.existLine) {
      this.service.saveForm(dlgForm, null, false).subscribe(
        (data: T) => {
          this.model = data;
          if (this.listAll) {
            _datasource.push(this.model);
            this.listAll = _datasource;
            this.pushDataEvent.emit(this.listAll)
          }
          this.pushModelEvent.emit(this.model);
          this.hideDialogEvent.emit(false);
          this.appUtils.showInfoMessages('Operation effectuée avec succès');
        });
    }
  }

  public hideDialog() {
    this.hideDialogEvent.emit(false);
  }

  public onHide(event) {
    this.hideDialogEvent.emit(false);
  }

}
