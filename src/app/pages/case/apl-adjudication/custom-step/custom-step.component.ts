import {Component, OnInit} from '@angular/core';
import {CdkStep} from "@angular/cdk/stepper";
import {MatDialog} from "@angular/material/dialog";
import {CreateInconComponent} from "../modals/create-incon/create-incon.component";
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';


@Component({
  selector: 'app-custom-step',
  templateUrl: './custom-step.component.html',
  styleUrls: ['./custom-step.component.scss'],
  providers: [{provide: CdkStep, useExisting: CustomStepComponent}]
})
export class CustomStepComponent extends CdkStep implements OnInit {
  constructor(public dialog: Dialog) {
    // @ts-ignore
    super();
  }

  ngOnInit() {
  }

  onCreate(): void {
    const dialogRef = this.dialog.open<string>(CreateInconComponent, {
      width: '250px',
      data: {name: "ASSDASDS"},
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
