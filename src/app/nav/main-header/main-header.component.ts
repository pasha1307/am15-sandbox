import {Component, OnInit} from '@angular/core';
import {ToggleService} from "../../services/toggle.service";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  constructor(public toggleService: ToggleService) {
  }

  ngOnInit() {
  }

  toggle() {
    this.toggleService.toggle();
  }
}
