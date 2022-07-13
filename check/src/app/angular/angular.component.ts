import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  template: `
    <div [ngSwitch]="number">
      <div *ngSwitchCase="'1'">number selected one</div>
      <div *ngSwitchCase="'2'">number selected two</div>
      <div *ngSwitchCase="'3'">number selected three</div>
      <div *ngSwitchDefault>no number selected</div>
    </div>
  `,
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
public number=2;
  constructor() { }

  ngOnInit(): void {
  }

}
