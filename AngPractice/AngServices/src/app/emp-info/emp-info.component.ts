import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers:[RecordsService]
})
export class EmpInfoComponent implements OnInit {
  emp1R:any=[];
  emp2R:any=[];
  emp3R:any=[];
  emp4R:any=[];

  getInfoFromService1(){
    this.emp1R=this.rservice.getinfo1()
  }
  getInfoFromService2(){
    this.emp2R=this.rservice.getinfo2()
  }
  getInfoFromService3(){
    this.emp3R=this.rservice.getinfo3()
  }
  getInfoFromService4(){
    this.emp4R=this.rservice.getinfo4()
  }
  constructor(private rservice:RecordsService) { }

  ngOnInit(): void {
  }

}
