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

  // @ts-ignore
  addToArr(n: any) {
    if (n) {
      this.intakeObj.push(n);
    } else {
      return this.intakeObj;
    }

  }

  getArr() {
    console.log('LENGTH', this.intakeObj.length)
    return of(this.intakeObj);
  }


}
