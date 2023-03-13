import { Injectable } from '@angular/core';
import {APL_ADJUD_SAMPLE} from "../../assets/mock-data/adjudication-object-data";
import {APL_INTAKE_ARR, APL_INTAKE_SAMPLE} from "../../assets/mock-data/intake-object-data";
import {from, of} from "rxjs";
import * as _ from 'lodash';

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
  intakeObj = APL_INTAKE_ARR;
  // intakeObj = APL_INTAKE_SAMPLE;
  adjudObj = APL_ADJUD_SAMPLE;

  constructor() {}

  // @ts-ignore
  addToArr(n: any) {
    if (n) {
      this.intakeObj.push(n);
    } else {
      return this.intakeObj;
    }
  }

  updateApl(aplId: string, payload: any) {
    const index = _.findIndex(this.intakeObj, {aplId: aplId});
    this.intakeObj.splice(index, 1, payload);
  }


  getArr() {
    return of(this.intakeObj);
  }


}
