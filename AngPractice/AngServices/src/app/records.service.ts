import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  emp1=["prahasith","101"]
  emp2=["rohit","102"]
  emp3=["pavani","103"]
  emp4=["nuthan","104"]
  getinfo1(){
    return this.emp1
  }
  getinfo2(){
    return this.emp2
  }
  getinfo3(){
    return this.emp3
  }
  getinfo4(){
    return this.emp4
  }

  constructor() { }
}
