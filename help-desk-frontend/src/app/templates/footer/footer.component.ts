import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  @Input() leftText: string;
  @Input() rightText: string;
  @Input() centerText: string;

}
