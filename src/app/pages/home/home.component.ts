import {Component, OnInit} from '@angular/core';
import {APP_DROPDOWNS_OBJ} from "../../../assets/mock-data/dropdown-values-data";
import {DropdownsService} from "../../services/dropdowns.service";
import {AppealService} from "../../services/appeal.service";
import {APL_ADJUD_SAMPLE} from "../../../assets/mock-data/adjudication-object-data";
import {APL_INTAKE_ARR} from "../../../assets/mock-data/intake-object-data";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    adjObject =APL_ADJUD_SAMPLE;
    intakeObjectArr =APL_INTAKE_ARR;
    allDrops = APP_DROPDOWNS_OBJ;
    allTypes = this.allDrops.result.map(el => {
        return {
            type: el.type,
            val: el.value,
            el
        }
    });
    openTab = 1;

    constructor(private dropService: DropdownsService, private aplService: AppealService) {

    }

    ngOnInit() {
        console.log('ADJ OBJ', this.adjObject.adjudication);
        console.log('INTAKE OBJ', this.intakeObjectArr[0]);
      this.aplService.getArr().subscribe(r => {
          console.log('Home Arr', r);
      })
    }

    toggleTabs($tabNumber: number) {
        this.openTab = $tabNumber;
    }
}
