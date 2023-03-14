import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  isPrimary?: boolean;
  // form?: FormGroup;
  form = this.fb.group({
    contactId: [''],
    appealId: [''],
    type: [''],
    primaryContact: [false],
    ubleToContact: [false],
    firstName: ['', [Validators.required, Validators.maxLength(this.firstNameMaxLength), Validators.pattern('^[a-zA-Z-]+')]],
    middleName: ['', [Validators.maxLength(this.lastNameMaxLength), Validators.pattern('^[a-zA-Z-]+')]],
    lastName: ['', [Validators.required, Validators.maxLength(this.lastNameMaxLength), Validators.pattern('^[a-zA-Z-]+')]],
    sfx: [''],
    gender: ['', [Validators.required]],
    dob: [''],
    sgntrInd: [false],
    dtSgnd: [''],
    adrSameAsApllant: [false]
  });

  constructor(private fb: FormBuilder, private aplService: AppealService, private dialog: MatDialogRef<NewContactDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.isPrimary = data.isPrime;
    console.log('IS PRIMARY', this.isPrimary);
    this.form.get('primaryContact')?.setValue(data.isPrime);


    console.log('DATA??', data)
    if (data) {

      this.form.patchValue({
        type: data.type,
        primaryContact: data.primaryContact,
        ubleToContact: false,
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        sfx: data.sfx,
        dob: data.dob,
        gender: '',
        sgntrInd: data.sgntrInd,
        dtSgnd: data.dtSgnd,
        adrSameAsApllant: data.adrSameAsApllant
      });
    }
  }

  ngOnInit() {
    if(this.isPrimary) {
      this.form.get('primaryContact')?.setValue(!this.isPrimary);
    }

  }

  onSave() {
    // console.log('FORM', this.form.value)
      this.dialog.close(this.form?.value)
  }
  onClose() {
    this.dialog.close();
  }
}
