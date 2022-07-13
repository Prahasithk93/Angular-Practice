import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular',
  template: `
    <h1>{{name}}</h1>
    <h1>{{name | lowercase}}</h1>
    <h1>{{name | uppercase}}</h1>
    <h1>{{sentence | titlecase}}</h1>
    <h1>{{object | json}}</h1>
    <h1>{{num | number}}</h1>
    <h1>{{num | number:'2.1-2'}}</h1>
    <h1>{{num | currency}}</h1>
    <h1>{{num | currency:'INR'}}</h1>
    <h1>{{num | percent}}</h1>
    <h1>{{date}}</h1>
    <h1>{{date|date:'short'}}</h1>
    <h1>{{date|date:'shortDate'}}</h1>
    <h1>{{date|date:'shortTime'}}</h1>
    <h1>{{date|date:'mediumDate'}}</h1>
    <h1>{{date|date:'mediumTime'}}</h1>
  `,
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  public name="Prahasith";
  public sentence="hello prahasith";
  public object={
    "name":"prahasith",
    "city":"hyderabad"
  };
  public num="4.257";
  public date =new Date();

  constructor() { }

  ngOnInit(): void {
  }
  

}
function output() {
  throw new Error('Function not implemented.');
}

