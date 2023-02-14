import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  openTab = 1;

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }
}
