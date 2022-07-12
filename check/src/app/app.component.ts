import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  template:`
  <h2 class="text-color">welcome {{name}}</h2>
  <input bind-disabled="isDisabled" [id]="ID" type="text" value="prahasith">
  <h2 [class]="color">welcome {{name}}</h2>
  <h2 [class.text-color]="hasError">welcome {{name}}</h2>
  <h2 [ngClass]="Classes">welcome {{name}}</h2>
  ` ,
  styles: [`
    .text-success{
      color: red;
    }
    .text-failure{
      font-size:50px;
    }
    .text-tie{
      font-style:italic;
    }
  `]
})
export class AppComponent {
  title = 'Hello-world';
  public name="prahasith";
  public color="text-color";
  public ID="testid";
  public isDisabled=true;
  public hasError=false;
  public Classes={
    "text-success": !this.hasError,
    "text-failure": this.hasError,
    "text-tie":this.isDisabled 
  }
  
}
