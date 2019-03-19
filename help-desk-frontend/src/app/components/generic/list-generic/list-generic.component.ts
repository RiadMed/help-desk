import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ParentModel } from 'src/app/buisness/models/parent-model';
import { ModelColumn } from 'src/app/buisness/models/model-column';
import { ApplicationService } from 'src/app/buisness/services/application.service';

@Component({
  selector: 'app-list-generic',
  templateUrl: './list-generic.component.html'
})
export class ListGenericComponent<T extends ParentModel> {

  @Input() data: Array<T>;
  @Input() title: string;
  @Input() columnModel: ModelColumn[];

  @Output() clickAdd = new EventEmitter<void>();
  @Output() clickShow = new EventEmitter<T>();
  @Output() clickDelete = new EventEmitter<T>();
  @Output() clickExportExcel = new EventEmitter<void>();
  @Input() display: string;

  public addEntity() {
    this.clickAdd.emit();
  }

  public showDetail(_selected: T) {
    this.clickShow.emit(_selected);
  }

  public removeEntity(_selected: T) {
    this.clickDelete.emit(_selected);
  }

  public exportAsXLSX() {
    this.clickExportExcel.emit();
  }
}
