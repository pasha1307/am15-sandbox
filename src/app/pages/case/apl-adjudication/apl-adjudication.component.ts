import {Component, OnInit, ViewChild} from '@angular/core';
import {ToggleService} from "../../../services/toggle.service";
import {ADJUD_STEPS} from "../../../shared/data/stepper-appeal-data";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  HighProfileType,
  InconsistencyType, InfoNeeded,
  ReasonInsufficient,
  SercoStatus
} from "../../../shared/data/dropdowns/adjudication-stage";
import {CdkStep, CdkStepper} from "@angular/cdk/stepper";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalUpdateComponent} from "../../../shared/modal-update/modal-update.component";
import {CreateInconComponent} from "./modals/create-incon/create-incon.component";
import {NavStepperComponent} from "../../../components/nav-stepper/nav-stepper.component";
import {ModalComponent} from "../../../shared/modal/modal.component";
import {NewInconDialogComponent} from "../../../shared/dialogs/new-incon-dialog/new-incon-dialog.component";
import {INCON_DATA} from "../../../shared/data/inconsistency-details-data";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-apl-adjudication',
  templateUrl: './apl-adjudication.component.html',
  styleUrls: ['./apl-adjudication.component.scss'],
  providers: [{provide: CdkStepper, useExisting: AplAdjudicationComponent}]
})
export class AplAdjudicationComponent implements OnInit {
  displayedColumns: string[] = [
    'btns',
    'name',
    'inconType',
    'serco',
    'resolved',
    'expDate',
    'reasonInsuff',
    'elDate',
    'infoNeeded',
  ];
  dataSource?: any;
  // = [...INCON_DATA];
  @ViewChild(MatTable) table?: MatTable<any>;
  profiles = HighProfileType;
  serco = SercoStatus;
  inconTypes = InconsistencyType;
  reasonInsuff = ReasonInsufficient;
  infoNeeded = InfoNeeded;
  oneCompleted = false
  sevenCompleted = false
  twoCompleted = false
  threeCompleted = false
  fourCompleted = false
  fiveCompleted = false
  sixCompleted = false
  completed = false;
  menu = ADJUD_STEPS;
  sideOpened = true;
  f1 = this.fb.group({
    profile: ['None'],
    aplPhase: ['', Validators.required],
    nextAction: ['', Validators.required],
    nextActionDate: ['', Validators.required],
    ftrDate: [''],
    respKpiDateA02: [''],
    adjKpiDateA01: [''],
    adjKpiDateA02: [''],
    adjKpiDateA04: [''],
    extDate: [''],
  });

  constructor(public toggleService: ToggleService, private fb: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource = [...INCON_DATA];
    this.completed = false;
    this.f1.statusChanges.subscribe(v => {
      if (this.f1.valid) {
        this.oneCompleted = true;
      }
      console.log('STAT CHN', v);
    })
    // this.sideOpened = this.toggleService?.isOpened;
    // console.log('NAV DATA in History', history.state)
  }

  onToggle() {
    this.sideOpened = !this.sideOpened;
    if (this.sideOpened) {
      this.toggleService.isOpened = false;
    } else {
      this.toggleService.isOpened = true;
    }
  }

  completeStep(f: FormGroup): void {
    this.completed = true;
    console.log('Step One', f.value);
  }

  onCreate() {
    const config = new MatDialogConfig();
    config.width = '700px';
    config.autoFocus = false;
    const dialogRef = this.dialog.open(NewInconDialogComponent, config);
    dialogRef.afterClosed().subscribe(d => {
        this.onAfterClose(d)
      }
    );
  }

  onAfterClose(d: any) {
    if (d) {

      const incon = {
        id: d.id + 1,
        name: d.aplName,
        inconType: d.inconType,
        serco: d.serco,
        resolved: d.isResolved,
        expDate: d.expiredDate,
        reasonInsuff: d.reasonInsuff,
        elDate: d.eligibleDate,
        infoNeeded: d.infoNeeded
      }
      this.addData(incon)

      console.log("Dialog output:", d)
    }

  }

  onUpdate(item: any, index: number) {
    const config = new MatDialogConfig();
    config.width = '900px';
    config.autoFocus = false;
    config.data = item;
    const dialogRef = this.dialog.open(NewInconDialogComponent, config);
    dialogRef.afterClosed().subscribe(data => {
        this.onAfterClose(data)
      }
    );

    console.log('ITEM and Index', item, index);
  }

  addData(d: any) {
    this.dataSource.push(d);
    this.table?.renderRows();
  }

  removeData(id: number) {
    this.dataSource = this.dataSource.filter((u: any) => u.id !== id);
    this.table?.renderRows();
  }
}
