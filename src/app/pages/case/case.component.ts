import {AfterContentInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ToggleService} from "../../services/toggle.service";
import {MAIN_SIDE} from "../../nav/nav-data/main-side-menu-data";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit, AfterContentInit {
  menu = MAIN_SIDE;
  @Input() isClosed = true;
  links = ['Intake', 'Adjudication/IR', 'Hearing', 'Effectuation/Closure'];
  activeLink = this.links[0];
  // background: ThemePalette = 'primary';
  background: ThemePalette = 'primary';
  apl?: any;
  isIntake?: boolean;
  isAdjud?: boolean;
  isHear?: boolean;
  isEffect?: boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private router: Router, public toggleService: ToggleService) {
    if (history.state.data) {
      this.apl = history.state.data;
      this.toggleService.toOpen = false;
    } else {
      this.toggleService.toOpen = true;
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {
    // @ts-ignore
    this.isIntake = this.router.url.includes('intake');
    this.isAdjud = this.router.url.includes('adjudication');
    this.isHear = this.router.url.includes('hearing');
    this.isEffect = this.router.url.includes('closure');

  }

  ngAfterContentInit() {
    // this.toggle.isOpened = false;
  }

  toggleBackground() {
    this.background = this.background ? 'accent' : undefined;
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

}
