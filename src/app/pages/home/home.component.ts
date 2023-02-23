import {Component, OnInit} from '@angular/core';
import {APP_DROPDOWNS_OBJ} from "../../../assets/mock-data/dropdown-values-data";
import {DropdownsService} from "../../services/dropdowns.service";
import {AppealService} from "../../services/appeal.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
      this.aplService.getArr().subscribe(r => {
          console.log('Home Arr', r);
      })
    }

    toggleTabs($tabNumber: number) {
        this.openTab = $tabNumber;
    }
}
