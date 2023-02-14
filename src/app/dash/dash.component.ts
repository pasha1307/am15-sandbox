import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {SmartyService} from "../services/smarty.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalComponent} from "../shared/modal/modal.component";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  isAccount = false;
  isApl = false;
  isTask = false;
  isIc = false
  isCrm = false
  isCpm = false
  isEacms = false
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {title: 'Recent Work', cols: 3, rows: 2, comp: 'apl_table'},
          {title: 'My Appeals', cols: 1, rows: 1, comp: 'apl_table'},
          {title: 'Correspondence Tasks', cols: 1, rows: 1, comp: 'corr_table'},
          {title: 'CRM Workbaskets', cols: 1, rows: 1, comp: 'chart'},
          {title: 'My Team', cols: 1, rows: 1, comp: 'chart'}
        ];
      }

      return [
        {title: 'Recent Work', cols: 3, rows: 2, comp: 'apl_table'},
        {title: 'My Appeals', cols: 2, rows: 1, comp: 'apl_table'},
        {title: 'Correspondence Tasks', cols: 1, rows: 1, comp: 'corr_table'},
        {title: 'CRM Workbaskets', cols: 1, rows: 1, comp: 'chart'},
        {title: 'My Team', cols: 1, rows: 1, comp: 'chart'}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private smService: SmartyService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.smService.lookup().subscribe((r: any) => console.log('LOOKUP DATA?', r));
    // this.smService.autoAdd('Madison').subscribe((r: any) => console.log('DATA?', r));
  }

  openDialog() {
    const config = new MatDialogConfig();
    config.width = '600px';
    config.minHeight = '400px';
    this.dialog.open(ModalComponent, config);
  }
}
