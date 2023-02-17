import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() name:string=""
  @Input() imgNormal:string=""
  @Input() imgResp1:string=""
  @Input() imgResp2:string=""
  @Input() imgResp3:string=""
  @Input() imgResp4:string=""
  @Input() desc:string=""
}
