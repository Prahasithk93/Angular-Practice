import { Component} from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  template:`
  <h2 >hello {{name}}</h2>
  <input #input type="text">
  <button (click)="message(input.value)">click me</button>
  {{input.value}}
  ` ,
  styles: [`

  `]
})
export class AppComponent {
  public name="prahasith";
  
  constructor() { }

  ngOnInit(): void {
  }
  message(value:any){
    console.log(value);
  }
}
