import {Component} from '@angular/core';
import {APP_DROPDOWNS_OBJ} from "../../../assets/mock-data/dropdown-values-data";
import {DropdownsService} from "../../services/dropdowns.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  allDrops = APP_DROPDOWNS_OBJ;
  allTypes = this.allDrops.result.map(el => {
    return {
      type: el.type,
      val: el.value,
      el
    }
  });
  openTab = 1;
constructor(private dropService: DropdownsService) {
  console.log(this.dropService.getTypes())
}
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }
}
