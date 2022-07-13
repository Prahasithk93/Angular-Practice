import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-angular',
  template: `
    <h2>{{"good morning "+name}}</h2>
    <button (click)="fireEvent()">click me</button>
  `,
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  @Input('parentData') public name: any;
  @Output() public childEvent=new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('Hey prahasith');
  }

}
function output() {
  throw new Error('Function not implemented.');
}

