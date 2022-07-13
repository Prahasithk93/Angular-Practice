import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  template: `
  <h1>for index </h1>
    <div *ngFor="let car of cars; index as i">
        <p>{{i}} {{car}}</p>
    </div>
    <h1>for first index </h1>
    <div *ngFor="let car of cars; first as f">
        <p>{{f}} {{car}}</p>
    </div>
    <h1>for last index </h1>
    <div *ngFor="let car of cars; last as l">
        <p>{{l}} {{car}}</p>
    </div>
    <h1>for even index </h1>
    <div *ngFor="let car of cars; even as e">
        <p>{{e}} {{car}}</p>
    </div>
    <h1>for odd index </h1>
    <div *ngFor="let car of cars; odd as o">
        <p>{{o}} {{car}}</p>
    </div>
  `,
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  public cars = ["maruti", "volvo", "audi", "tata"];
  constructor() { }

  ngOnInit(): void {
  }

}
