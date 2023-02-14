import {Component, Input} from '@angular/core';
import {SideMenu} from "../nav-data/main-side-menu.model";

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {
  @Input() menu?: SideMenu;
}
