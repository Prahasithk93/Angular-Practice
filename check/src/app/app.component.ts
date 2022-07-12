import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h2>welcome {{name}}</h2>
  <input bind-disabled="isDisabled" [id]="ID" type="text" value="prahasith">
  ` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-world';
  public name="prahasith"
  public ID="testid";
  public isDisabled=true;
}
