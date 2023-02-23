import { Injectable } from '@angular/core';
import {APL_ADJUD_SAMPLE} from "../../assets/mock-data/adjudication-object-data";
import {APL_INTAKE_SAMPLE} from "../../assets/mock-data/intake-object-data";

@Injectable({
  providedIn: 'root'
})
export class AppealService {
  intakeObj = APL_INTAKE_SAMPLE;
  adjudObj = APL_ADJUD_SAMPLE;

  constructor() {

  }
  onKoo() {
    return Object.entries(this.adjudObj).sort();
  }

}
