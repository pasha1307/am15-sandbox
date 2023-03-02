import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AppealService} from "../../../services/appeal.service";

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

  constructor(private fb: FormBuilder, private aplService: AppealService) {
  }

  ngOnInit() {
  }
  onSave() {

  }
  onClose() {

  }
}
