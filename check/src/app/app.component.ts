import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  template:`
  <h2 [style.color]="'red'">hello {{name}}</h2>
  <h2 [style.color]="isError?'green':'blue'">hello {{name}}</h2>
  <h2 [style.color]="textColor">hello {{name}}</h2>
  <h2 [ngStyle]="titleStyle">hello {{name}}</h2>
  ` ,
  styles: [`

  `]
})
export class AppComponent {
  public name="prahasith";
  public isError=false;
  public textColor="orange";
  public titleStyle={
      color: "blue",
      fontStyle:"italic"
  }
}
