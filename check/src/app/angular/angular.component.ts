import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  template: `
    <div *ngFor="let car of cars">
        <p>{{car}}</p>
    </div>
  `,
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

    public cars=["maruti","volvo","audi","tata"];
  constructor() { }

  ngOnInit(): void {
  }

}
