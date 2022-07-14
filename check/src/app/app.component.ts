import { Component, Input} from '@angular/core';
import { reduce } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'project';
  public message="";
  public btn1="bg-primary";
  public btn2="bg-warning";
  public btnColors={
    btnP:"bg-primary",
    btnS:"bg-secondary"
  }

  constructor() { }

  ngOnInit(): void {
  }

  display(event: any){
    console.log(event);
    this.message = event;
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