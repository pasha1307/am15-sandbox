import { Injectable } from '@angular/core';
import {APL_ADJUD_SAMPLE} from "../../assets/mock-data/adjudication-object-data";
import {APL_INTAKE_SAMPLE} from "../../assets/mock-data/intake-object-data";
import {from, of} from "rxjs";

export interface SampleObj {
  name: string;
  job: string;
  address: SampleAddr[];
}

export interface SampleAddr {
  street: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})


export class AppealService {
  intakeObj = APL_INTAKE_SAMPLE;
  adjudObj = APL_ADJUD_SAMPLE;
  arr = [
    {name: 'Mike', job: 'turner', address: [{street: 'Main', city: 'Boston'}]},
    {name: 'Mary', job: 'manager', address: [{street: 'State', city: 'Chicago'}]},
  ];

  constructor() {}

  addToArr(n: SampleObj) {
    this.arr.push(n);
  }

  getArr() {
    console.log('LENGTH', this.arr.length)
    return of(this.arr);
  }


}
