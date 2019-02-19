import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/buisness/services/affectation.service';
import { Affectation } from 'src/app/buisness/models/affectation';
import { SoftwareService } from 'src/app/buisness/services/software.service';
import { Software } from 'src/app/buisness/models/software';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  listAll: Array<Affectation>;
  listSoftAll: Array<Software>;
  totalSoft: number;

  constructor(private affectationService: AffectationService
    , private softwareService: SoftwareService) { }

  ngOnInit() {
    this.softwareService.findAll().subscribe(softs => {
      this.listSoftAll = softs;
      this.totalSoft = softs.length;
    })

    this.affectationService.findAll().subscribe(data => {
      this.listAll = data;
    })
  }

  public getActivatedSoft(softId: number): number {
    if (this.listAll)
      return this.listAll.filter(x => x.softwareId != null && x.softwareId == softId && x.active).length;
    return 0;
  }

  public getInActivatedSoft(softId: number): number {
    if (this.listAll)
      return this.listAll.filter(x => x.softwareId != null && x.softwareId == softId && !x.active).length;
    return 0;
  }

  public getTotalSoft(softId: number): number {
    if (this.listAll)
    
      return this.listAll.filter(x => x.softwareId != null && x.softwareId == softId).length;
    return 0;
  }

}