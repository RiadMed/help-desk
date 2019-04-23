import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/buisness/services/affectation.service';
import { Affectation } from 'src/app/buisness/models/affectation';
import { SoftwareService } from 'src/app/buisness/services/software.service';
import { Product } from 'src/app/buisness/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  listAll: Array<Affectation>;
  listSoftAll: Array<Product>;
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
      return 0;
    return 0;
  }

  public getInActivatedSoft(softId: number): number {
    if (this.listAll)
      return 0;
    return 0;
  }

  public getTotalSoft(softId: number): number {
    if (this.listAll)
      return 0;
    return 0;
  }

}
