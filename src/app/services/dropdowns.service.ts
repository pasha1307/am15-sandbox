import { Injectable } from '@angular/core';
import {APP_DROPDOWNS_OBJ} from "../../assets/mock-data/dropdown-values-data";

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
  getTypes() {
    return [...this.dataArr].map(item => {
      return {
        type: item.type,
        item
      }
    }).filter(el => el.type === 'APL_TYPE');
  }

  getSubTypes() {

  }
}
