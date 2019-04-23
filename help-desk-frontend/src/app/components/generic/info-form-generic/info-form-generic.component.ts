import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModelForm } from 'src/app/buisness/models/model-form';

@Component({
  selector: 'app-info-form-generic',
  templateUrl: './info-form-generic.component.html'
})
export class InfoFormGenericComponent {

  @Input() title: string;
  @Input('model') modelForm: ModelForm<any>;
  @Input('form') addForm: FormGroup;

  @Output() clickShowAddDialog = new EventEmitter<void>();

  public showAddDialog() {
    this.clickShowAddDialog.emit();
  }

}
