import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AppealService} from "../../../services/appeal.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {
  firstNameMaxLength = 35;
  middleNameMaxLength = 25;
  lastNameMaxLength = 60;
  aplSuffixArr = ['One', 'Two', 'Three'];
  sfx = ['Jr', 'Sr', 'I', 'II', 'III'];
  isPrimaryContact = false;
  form = this.fb.group({
    contactId: [''],
    appealId: [''],
    prsnType: [''],
    type: [''],
    primaryContact: [false],
    ubleToContact: [false, [Validators.required]],
    firstName: ['', [Validators.required, Validators.maxLength(this.firstNameMaxLength), Validators.pattern('^[a-zA-Z-]+')]],
    middleName: ['', [Validators.maxLength(this.lastNameMaxLength), Validators.pattern('^[a-zA-Z-]+')]],
    lastName: ['', [Validators.required, Validators.maxLength(this.lastNameMaxLength), Validators.pattern('^[a-zA-Z-]+')]],
    sfx: [''],
    dob: ['', Validators.required],
    sgntrInd: [false],
    dtSgnd: ['', Validators.required],
    adrSameAsApllant: [false]
  });

  constructor(private fb: FormBuilder, private aplService: AppealService, private dialog: MatDialogRef<NewContactDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    console.log('DATA??', data)
    if (data) {

      this.form.patchValue({
        prsnType: data.prsnType,
        type: data.type,
        primaryContact: data.primaryContact,
        ubleToContact: data.ubleToContact,
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        sfx: data.sfx,
        dob: data.dob,
        sgntrInd: data.sgntrInd,
        dtSgnd: data.dtSgnd,
        adrSameAsApllant: data.adrSameAsApllant
      });
    }
  }

  ngOnInit() {

  }

  onSave() {
    // console.log('FORM', this.form.value)
      this.dialog.close(this.form.value)
  }
  onClose() {
    this.dialog.close();
  }
}
