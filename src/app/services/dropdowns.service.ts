import { Injectable } from '@angular/core';
import {APP_DROPDOWNS_OBJ} from "../../assets/mock-data/dropdown-values-data";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DropdownsService {
data = APP_DROPDOWNS_OBJ;
dataArr = [...this.data.result];
  constructor() { }
  getAll() {
    return [...this.dataArr];
  }

  getIntakeTypes() {
    return _.filter(this.dataArr, {context: 'Intake', type: 'APL_TYPE'});
  }
  getIntakeIssues() {
    return _.filter(this.dataArr, {context: 'Intake', type: 'APL_ISSUE'});
  }

  getHearingContext() {
    return _.filter(this.dataArr, {context: 'hearing'});
  }

  getTypes() {
    return _.groupBy(this.dataArr, 'context');
    // return [...this.dataArr].map(item => {
    //   return {
    //     type: item.type,
    //     item
    //   }
    // }).filter(el => el.type === 'APL_TYPE');
  }

  getSubTypes() {
    return _.filter(this.dataArr, {context: 'Intake', type: 'APL_ISSUE'});
  }
}
