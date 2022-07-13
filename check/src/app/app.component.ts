// import { Component} from '@angular/core';
// import { reduce } from 'rxjs';


// @Component({
//   selector: 'app-root',
//   template:`<ng-template><div>Hello</div></ng-template>` ,
//   styles: [`

//   `]
// })
// export class AppComponent {
//   public name=true
  
//   constructor() { }

//   ngOnInit(): void {
//   }
 
// }
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
}