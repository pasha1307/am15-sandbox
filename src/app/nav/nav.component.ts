import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {SIDE_MENU} from "../../assets/menus/main-menu.data";
import {MAIN_SIDE} from "./nav-data/main-side-menu-data";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ToggleService} from "../services/toggle.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menu = MAIN_SIDE;
  isSideMenu = true;
  // isSideMenu = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private route: ActivatedRoute,
              public toggleService: ToggleService
  ) {
  }

  ngOnInit() {
    // this.isSideMenu = this.toggleService.isOpened;
  }

  onToggle() {
    this.toggleService.toggle();
    this.isSideMenu = this.toggleService.isOpened;
    // console.log(this.toggleService.isOpened)
  }
}
