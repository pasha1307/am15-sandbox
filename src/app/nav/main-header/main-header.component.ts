import {Component, OnInit} from '@angular/core';
import {ToggleService} from "../../services/toggle.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AppealService} from "../../services/appeal.service";
import {CaseCreateComponent} from "../../pages/case/case-create/case-create.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  constructor(public toggleService: ToggleService, public dialog: MatDialog, private aplService: AppealService, private router: Router) {
  }

  ngOnInit() {
  }

  toggle() {
    this.toggleService.toggle();
  }
  onCreateAppeal() {
    // const doo =  {name: 'Mary', job: 'manager', address: [{street: 'Beans', city: 'Atlanta'}, {street: 'Magnolia', city: 'Cambridge'}]};

    // this.aplService.addToArr(doo);
    const config = new MatDialogConfig();
    config.width = '500px';
    config.autoFocus = false;
    const dialogRef = this.dialog.open(CaseCreateComponent, config);
    dialogRef.afterClosed().subscribe(d => {
      if (d) {
        this.aplService.addToArr(d);
        this.router.navigateByUrl(`/mywork/appeals/`)
        console.log('Dialog CLosed', d);
      }
        }
    );
  }
}
