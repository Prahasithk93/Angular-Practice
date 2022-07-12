import { Component} from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  template:`
  <h2 >hello {{name}}</h2>
  <button (click)="onClick($event)">click me</button>
  <button (click)="greeting='welcome prahasith'">click me</button>
  {{greeting}}
  ` ,
  styles: [`

  `]
})
export class AppComponent {
  public name="prahasith";
  public greeting="";
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event:any){
    console.log(event.type);
    this.greeting="good luck";
  };
}
