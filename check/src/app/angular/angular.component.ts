import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular',
  template: `
    <h2>{{"good morning "+name}}</h2>
  `,
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  @Input('parentData') public name: any;
  constructor() { }

  ngOnInit(): void {
  }

}
