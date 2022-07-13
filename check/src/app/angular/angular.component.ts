import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  template: `<h2 *ngIf="name;else elseError">hello  prahasith</h2>
  <ng-template #elseError><h2>good morning</h2></ng-template>
  <div *ngIf="name; then thenB; else elseB"; ></div>
  <ng-template #thenB>
    <h2>code Evolution</h2>
  </ng-template>
  <ng-template #elseB>
    <h2>Hidden</h2>
  </ng-template>
  `,
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
public name=false
  constructor() { }

  ngOnInit(): void {
  }

}
