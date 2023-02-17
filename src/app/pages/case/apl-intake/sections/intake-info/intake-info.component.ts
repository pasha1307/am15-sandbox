import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {of} from "rxjs";

@Component({
  selector: 'app-intake-info',
  templateUrl: './intake-info.component.html',
  styleUrls: ['./intake-info.component.scss']
})
export class IntakeInfoComponent {
  formType$ = of([{code: '1', displayText: 'option one'}]);
  xRefType$ = of([{code: '1', displayText: 'option one'}]);
  receiptType$ = of([{code: '1', displayText: 'option one'}]);
  intakeType$ = of([{code: '1', displayText: 'option one'}]);
  aplSubmitBy$ = of([{code: '1', displayText: 'option one'}]);
  pendedReason$ = of([{code: '1', displayText: 'option one'}]);
  benefitYear$ = of([{code: '1', displayText: 'option one'}]);
  currentYear = new Date().getFullYear();
  minDate = new Date(this.currentYear - 10, 0, 1);
  maxDate = new Date(this.currentYear + 10, 11, 31);
  processingDateValue!: number;
  isDisplayDate = false;
  form = this.fb.group(
    {
      intakeType: ['', Validators.required],
      receiptType: [''],
      pendedReason: [''],
      formType: [''],
      aplSubmittedBy: [''],
      pendedReqEndDate: [{value: '', disabled: true}, Validators.required],
      pendedReqStartDate: [{value: '', disabled: true}, Validators.required],
      appCallReleaseHold: ['', Validators.required],
      xreferenceType: [''],
      xreference: [{value: ''}, [Validators.required, Validators.pattern('^APL-[0-9]+$')]],
      receiptDate: ['', {validators: [Validators.required]}],
      hearingRecieptDate: [''],
      planYear: [''],
    },
    {
      validators: Validators.required,
    }
  );

  constructor(private fb: FormBuilder) {

    this.form.controls.pendedReason.valueChanges.subscribe((val) => {
      const pendedReqStartDate = this.form.controls.pendedReqStartDate;
      const pendedReqEndDate = this.form.controls.pendedReqEndDate;

      if (val != '') {
        pendedReqStartDate.setValidators(Validators.required);
        pendedReqEndDate.setValidators(Validators.required);
        pendedReqStartDate.enable();
        pendedReqEndDate.enable();
      } else {
        pendedReqStartDate.clearValidators();
        pendedReqEndDate.clearValidators();
        pendedReqStartDate.disable();
        pendedReqEndDate.disable();
      }
      pendedReqStartDate.updateValueAndValidity();
      pendedReqEndDate.updateValueAndValidity();
    });

    this.form.controls.receiptDate.valueChanges.subscribe((value) => {
      if (this.form.controls.receiptDate.status == 'VALID') {
        this.isDisplayDate = true;
        const date = new Date();
        // @ts-ignore
        this.processingDateValue = date.setDate(new Date());
      } else {
        this.isDisplayDate = false;
      }
    });

    this.form.controls.xreferenceType.valueChanges.subscribe((value) => {
      value ? this.form.controls.xreference.enable() : this.form.controls.xreference.disable();
    });
  }

  hasError = (controlName: string, errorName: string) => {
    if (!this.form.controls.hasOwnProperty(controlName)) {
      throw new Error(`Control with name ${controlName} not found in form group`);
    }
    return this.form.get(controlName)?.hasError(errorName);
  };
}
