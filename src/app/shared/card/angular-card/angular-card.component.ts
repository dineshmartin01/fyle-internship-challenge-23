import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-card',
  templateUrl: './angular-card.component.html',
  styleUrls: ['./angular-card.component.scss']
})
export class AngularCardComponent {
  @Input() title: string="";
  @Input() subtitle: string="";
  @Input() content: string="";
  @Input() tag : any=[];
}