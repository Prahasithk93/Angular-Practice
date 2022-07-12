import { Component} from '@angular/core';
import { reduce } from 'rxjs';


@Component({
  selector: 'app-root',
  template:`
  <input [(ngModel)]="name" type="text">
  {{name}}
  ` ,
  styles: [`

  `]
})
export class AppComponent {
  public name="";
  
  constructor() { }

  ngOnInit(): void {
  }
 
}
