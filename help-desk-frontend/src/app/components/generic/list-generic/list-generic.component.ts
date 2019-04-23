import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { ModelColumn } from 'src/app/buisness/models/model-column';
import { ParentModel } from 'src/app/buisness/models/parent-model';
import { DTCheckbox } from 'primeng/primeng';
import { Table } from 'primeng/table';
import { query } from '@angular/core/src/render3';

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

  query: string = "";
  table: Table;
  keyup: boolean = true;

  KEYCODE_ESC: string = "Escape";

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

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === this.KEYCODE_ESC) {
      this.query = ""
      this.table.reset();
      this.keyup = true;
    }
  }

  onChangeFilter(dt: Table) {
    if (this.keyup) {
      this.table = dt;
      this.keyup = false;
    }
  }

}
