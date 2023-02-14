import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SmartyService} from "../../../services/smarty.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  HighProfileType,
  InconsistencyType, InfoNeeded,
  ReasonInsufficient,
  SercoStatus
} from "../../data/dropdowns/adjudication-stage";

@Component({
  selector: 'app-new-incon-dialog',
  templateUrl: './new-incon-dialog.component.html',
  styleUrls: ['./new-incon-dialog.component.scss']
})
export class NewInconDialogComponent implements OnInit {
  customData?: any;
  profiles = HighProfileType;
  serco = SercoStatus;
  inconTypes = InconsistencyType.slice();
  reasonInsuff = ReasonInsufficient;
  infoNeeded = InfoNeeded;
  form = this.fb.group({
    aplName: ['', Validators.required],
    inconType: ['', Validators.required],
    reasonInsuff: ['', Validators.required],
    infoNeeded: ['', Validators.required],
    satisfyIncon: ['', Validators.required],
    serco: ['Open', Validators.required],
    isResolved: [false, Validators.required],
    expiredDate: [''],
    eligibleDate: [''],
  });

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<NewInconDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.customData = data;
    console.log('CUISTOM DATAAA', data);


    // this.form = this.fb.group({
    //   aplName: ['', Validators.required],
    //   inconType: ['', Validators.required],
    //   reasonInsuff: ['', Validators.required],
    //   infoNeeded: ['', Validators.required],
    //   satisfyIncon: ['', Validators.required],
    //   serco: ['Open', Validators.required],
    //   isResolved: [false, Validators.required],
    //   expiredDate: [''],
    //   eligibleDate: [''],
    // });

  }

  ngOnInit() {
    if (this.customData) {
      const d = this.customData;
      this.form.setValue({
        aplName: d.name,
        inconType: d.inconType,
        reasonInsuff: d.reasonInsuff,
        infoNeeded: d.infoNeeded,
        satisfyIncon: '',
        serco: d.serco,
        isResolved: d.resolved,
        expiredDate: d.expDate,
        eligibleDate: d.elDate,
      });
    }
  }

  onClose() {
    // const d = this.customData;
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.form.value);
    console.log(this.form.value);
  }
}
