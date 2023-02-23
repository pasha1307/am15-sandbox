import { Injectable } from '@angular/core';
import {APL_ADJUD_SAMPLE} from "../../assets/mock-data/adjudication-object-data";
import {APL_INTAKE_SAMPLE} from "../../assets/mock-data/intake-object-data";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppealService {
  intakeObj = APL_INTAKE_SAMPLE;
  adjudObj = APL_ADJUD_SAMPLE;
  arr = ['mo', 'mk', 'ghf'];

  constructor() {}

  addToArr(n: string) {
    return this.arr.push(n);
  }

  getArr() {
    return from(this.arr);
  }


}
