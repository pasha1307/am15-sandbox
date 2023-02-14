import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-create-incon',
  templateUrl: './create-incon.component.html',
  styleUrls: ['./create-incon.component.scss']
})
export class CreateInconComponent implements OnInit {
  customData?: any;
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

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateInconComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
  }

  // constructor(
  //   private fb: FormBuilder,
  //   public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: any
  // ) {
  // }

  ngOnInit() {
    const d = this.customData;
    console.log("CUSTOM D", d);
    // this.form.setValue({
    // type: d.type,
    // street_line: d.street_line,
    // is_second: 'true',
    // secondary: d.secondary,
    // city: d.city,
    // county: 'nd',
    // state: d.state,
    // zipcode: d.zipcode
    // });
  }

  onClose() {
    const d = this.customData;
    console.log("Cancel:", d)
    // this.form.setValue({
    //   type: d.type,
    //   street_line: d.street_line,
    //   is_second: 'true',
    //   secondary: d.secondary,
    //   city: d.city,
    //   county: 'nd',
    //   state: d.state,
    //   zipcode: d.zipcode
    // });
    this.dialogRef.close();
  }

  onSave() {
    // this.dialogRef.close(this.form.value);
    console.log(this.form.value);
  }
}
