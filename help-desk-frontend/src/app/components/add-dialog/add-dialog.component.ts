import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ParentModel } from 'src/app/buisness/models/parent-model';
import { GenericService } from 'src/app/buisness/services/generic-service';
import { AppUtils } from 'src/app/helpers/app-utils';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html'
})
export class AddDialogComponent<T extends ParentModel, S extends GenericService<T>> implements OnInit {

  dialogform: FormGroup;
  existLine: boolean;

  @Input('datasource') listAll: Array<T>;
  @Input('appModel') model: T;
  @Input() showDialog: boolean;
  @Input() service: S;

  @Output() pushDataEvent = new EventEmitter();
  @Output() pushModelEvent = new EventEmitter();
  @Output() hideDialogEvent = new EventEmitter();

  protected appUtils: AppUtils;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dialogform = this.formBuilder.group({
      'label': new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]))
    });
  }

  public saveData() {
    this.model.label = this.dialogform.get('label').value;
    let _datasource = [...this.listAll];
    let _model = _datasource.find(x => x.label.toLowerCase() == this.model.label.toLowerCase());
    this.existLine = _model != null;
    if (!this.existLine) {
      this.service.saveData(this.model, false).subscribe(
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

  public onHide(event){
    this.hideDialogEvent.emit(false);
  }

}
