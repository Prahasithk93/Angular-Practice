import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<h1>hello<h1>
  <input type="text" value="prahasith">
  <h1>{{"hello "+greet}}</h1>
  <h1>{{greetUser()}}</h1>
  <button routerLink="" routerLinkActive="active">back</button>
  `,
  styleUrls: []
})
export class Test1Component implements OnInit {
  public greet="good morning";
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "hello " +this.greet
  }
}
