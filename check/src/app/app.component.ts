import { Component} from '@angular/core';
import { reduce } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name="prahasith";
  title = 'project';
  public message="";
  constructor() { }

  ngOnInit(): void {
  }
 
}
// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'project';
// }