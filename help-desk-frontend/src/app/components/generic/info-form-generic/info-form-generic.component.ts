import { Component, OnInit, Input } from '@angular/core';
import { ModelForm } from 'src/app/buisness/models/model-form';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-form-generic',
  templateUrl: './info-form-generic.component.html'
})
export class InfoFormGenericComponent {

  @Input() title: string;
  @Input('model') modelForm: ModelForm<any>;
  @Input('form') addForm: FormGroup;
 
}
