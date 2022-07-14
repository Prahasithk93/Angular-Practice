import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  public name="prahasith";
  @Input() btn1: any;
  @Input() btn2: any;
 
  @Output() public childEvent=new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
  eventBtn1(){
    this.childEvent.emit('Button1 clicked');   
  }
  eventBtn2(){
    this.childEvent.emit('Button2 clicked');   
  }
}
