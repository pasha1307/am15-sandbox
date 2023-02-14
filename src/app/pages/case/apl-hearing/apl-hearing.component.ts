import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TabsComponent} from "smart-webcomponents-angular/tabs";

@Component({
  selector: 'app-apl-hearing',
  templateUrl: './apl-hearing.component.html',
  styleUrls: ['./apl-hearing.component.scss']
})
export class AplHearingComponent implements AfterViewInit {
  @ViewChild('tabs', {read: TabsComponent, static: false}) tabs!: TabsComponent;

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  init(): void {
    // init code.


  }
}
