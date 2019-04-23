import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ParentModel} from 'src/app/buisness/models/parent-model';
import {GenericService} from 'src/app/buisness/services/generic-service';
import {AppUtils} from 'src/app/helpers/app-utils';
import {NgxSpinnerService} from 'ngx-spinner';
import {MessageService} from 'primeng/primeng';
import {ModelForm} from 'src/app/buisness/models/model-form';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html'
})
export class AddDialogComponent<T extends ParentModel, S extends GenericService<T>> implements OnInit {

  @Input() dialogform: FormGroup;
  existLine: boolean;
  @Input('datasource') listAll: Array<T>;

  @Input() showDialog: boolean;
  @Input() service: S;
  @Input() formsModels: ModelForm<T>[];

  @Output() pushDataEvent = new EventEmitter();
  @Output() pushModelEvent = new EventEmitter();
  @Output() hideDialogEvent = new EventEmitter();
  @Output() pushObjectEvent = new EventEmitter();

  protected appUtils: AppUtils;

  constructor(private ngxSpinnerService: NgxSpinnerService
    , private messageService: MessageService) { }

  ngOnInit() {
    this.appUtils = new AppUtils(this.ngxSpinnerService, this.messageService, null);
  }

  public saveDataDlgForm() {
    let _datasource = [...this.listAll];
    this.service.saveForm(this.dialogform.value, null, false).subscribe(
      (data: T) => {
        let model = data;
        _datasource.push(model);
        this.pushObjectEvent.emit(model);
        this.listAll = _datasource;
        this.pushDataEvent.emit(this.listAll);
        this.appUtils.showInfoMessages('Operation effectuée avec succès');
        this.hideDialog();
      }
    );
  }

  public hideDialog() {
    this.hideDialogEvent.emit(false);
  }

  public onHide(event) {
    this.hideDialogEvent.emit(false);
  }

}
