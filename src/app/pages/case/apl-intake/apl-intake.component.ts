import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {INTAKE_STEPS} from "../../../shared/data/stepper-appeal-data";
import {of} from "rxjs";
import {CONTACTS_USER1, CONTACTS_USER2} from "../../../../assets/addresses-sample-data";
import {DropdownsService} from "../../../services/dropdowns.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalUpdateComponent} from "../../../shared/modal-update/modal-update.component";
import {AplHearingComponent} from "../apl-hearing/apl-hearing.component";
import {NewInconDialogComponent} from "../../../shared/dialogs/new-incon-dialog/new-incon-dialog.component";
import {IntakeContactsComponent} from "./sections/intake-contacts/intake-contacts.component";
import {CaseContactComponent} from "../case-contact/case-contact.component";
import {AppealService} from "../../../services/appeal.service";

@Component({
  selector: 'app-apl-intake',
  templateUrl: './apl-intake.component.html',
  styleUrls: ['./apl-intake.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true, displayDefaultIndicatorType: true},
    },
  ],
})
export class AplIntakeComponent implements OnInit {
  addresses1 = CONTACTS_USER1;
  addresses2 = CONTACTS_USER2;
  reps = [];
  aplData?: any;
  contactsArr?: any;
  menu = INTAKE_STEPS;
  err = 'ERROROWWERWRERE';
  completed = false;
  formTypes: any[] = [];
  receiptTypes: any[] = [];
  xRefTypes: any[] = [];
  submittedByTypes: any[] = []
  aplTypes: any[] = [];
  intakeTypes: any[] = [];


  pendedReason$ = of([{code: '1', displayText: 'option one'}]);
  benefitYear$ = of([{code: '1', displayText: 'option one'}]);
  currentYear = new Date().getFullYear();
  minDate = new Date(this.currentYear - 10, 0, 1);
  maxDate = new Date(this.currentYear + 10, 11, 31);
  processingDateValue!: number;
  isDisplayDate = false;
  isCompleted = false;
  f1 = this.fb.group(
    {
      aplType: ['', Validators.required],
      intakeType: ['', Validators.required],
      receiptType: [''],
      pendedReason: [''],
      formType: [''],
      aplSubmittedBy: [''],
      pendedReqEndDate: [{value: '', disabled: true}, Validators.required],
      pendedReqStartDate: [{value: '', disabled: true}, Validators.required],
      appCallReleaseHold: ['', Validators.required],
      xreferenceType: [''],
      xreference: ['', [Validators.required] ],
      receiptDate: ['', {validators: [Validators.required]}],
      hearingRecieptDate: [''],
      planYear: [''],
    },
    {
      validators: Validators.required,
    }
  );

  constructor(private fb: FormBuilder, private drops: DropdownsService, public dialog: MatDialog, private aplService: AppealService) {
    // this.f1.controls.pendedReason.valueChanges.subscribe((val) => {
    //   const pendedReqStartDate = this.f1.controls.pendedReqStartDate;
    //   const pendedReqEndDate = this.f1.controls.pendedReqEndDate;
    //
    //   if (val != '') {
    //     pendedReqStartDate.setValidators(Validators.required);
    //     pendedReqEndDate.setValidators(Validators.required);
    //     pendedReqStartDate.enable();
    //     pendedReqEndDate.enable();
    //   } else {
    //     pendedReqStartDate.clearValidators();
    //     pendedReqEndDate.clearValidators();
    //     pendedReqStartDate.disable();
    //     pendedReqEndDate.disable();
    //   }
    //   pendedReqStartDate.updateValueAndValidity();
    //   pendedReqEndDate.updateValueAndValidity();
    // });
    //
    // this.f1.controls.receiptDate.valueChanges.subscribe((value) => {
    //   if (this.f1.controls.receiptDate.status == 'VALID') {
    //     this.isDisplayDate = true;
    //     const date = new Date();
    //     // @ts-ignore
    //     this.processingDateValue = date.setDate(new Date());
    //   } else {
    //     this.isDisplayDate = false;
    //   }
    // });
    //
    // this.f1.controls.xreferenceType.valueChanges.subscribe((value) => {
    //   value ? this.f1.controls.xreference.enable() : this.f1.controls.xreference.disable();
    // });
  }
  ngOnInit() {
    this.aplService.getArr().subscribe(r => console.log('INTAKE OBJ ARR', r))
    if (history.state.data) {
      this.aplData = history.state.data;
      this.contactsArr = this.aplData.contacts;
      console.log('HISTORY APL', this.aplData);
      this.f1.setValue({
        aplType: this.aplData.aplType || '',
        intakeType: this.aplData.intakeType || '',
        receiptType: this.aplData.receiptType || '',
        pendedReason: this.aplData.pendedReason || '',
        formType: this.aplData.formType || '',
        aplSubmittedBy: this.aplData.aplSubmittedBy || '',
        pendedReqEndDate: this.aplData.pendedReqEndDate || '',
        pendedReqStartDate: this.aplData.pendedReqStartDate || '',
        appCallReleaseHold: this.aplData.appCallReleaseHold || '',
        xreferenceType:  this.aplData.xreferenceType || '',
        xreference: this.aplData.xreference || '',
        receiptDate: this.aplData.recieptDate || '',
        hearingRecieptDate: this.aplData.hearingRecieptDate || '',
        planYear: this.aplData.planYear || '',
      })
    }
    // @ts-ignore
    this.aplTypes = this.drops.getAplTypes();
    this.formTypes = this.drops.getFormType()
    this.receiptTypes = this.drops.getReceiptType();
    this.xRefTypes = this.drops.getXrefType();
    this.submittedByTypes = this.drops.getSourceType();
    this.intakeTypes = this.drops.getIntakeType();

    // submittedByTypes = []
  }

  hasError(controlName: string, errorName: string) {
    if (!this.f1.controls.hasOwnProperty(controlName)) {
      throw new Error(`Control with name ${controlName} not found in form group`);
    }
    return this.f1.get(controlName)?.hasError(errorName);
  }

  getUpdateObj() {
    return {
      ...this.aplData,
      aplType: this.f1.value.aplType,
      intakeType: this.f1.value.intakeType,
      receiptType: this.f1.value.receiptType,
      pendedReason: this.f1.value.pendedReason,
      formType: this.f1.value.formType,
      aplSubmittedBy: this.f1.value.aplSubmittedBy,
      pendedReqEndDate: this.f1.value.pendedReqEndDate,
      pendedReqStartDate: this.f1.value.pendedReqStartDate,
      appCallReleaseHold: this.f1.value.appCallReleaseHold,
      xreferenceType:  this.f1.value.xreferenceType,
      xreference: this.f1.value.xreference,
      recieptDate: this.f1.value.receiptDate,
      hearingRecieptDate: this.f1.value.hearingRecieptDate,
      planYear: this.f1.value.planYear,
    }
  }

  completeStep(): void {
    const pload = this.getUpdateObj();
    this.aplService.updateApl(this.aplData.aplId, pload);
    this.aplService.getArr().subscribe(r => {
      if (r) {
        this.isCompleted = true;
        this.completed = true;
      }
    });
  }

  onUpdate() {
    const config = new MatDialogConfig();
    config.width = '600px';
    config.autoFocus = false;
    // config.data = item;
    const dialogRef = this.dialog.open(CaseContactComponent, config);
    dialogRef.afterClosed().subscribe(data => {
      console.log("Dialog output:", data)
      if (data) {
        // this.addresses1[index] = data;
      }
    });

  }

  onNewAplContact() {
      const config = new MatDialogConfig();
      config.width = '600px';
      config.autoFocus = false;
      // config.data = item;
      const dialogRef = this.dialog.open(CaseContactComponent, config);
      dialogRef.afterClosed().subscribe(data => {
        console.log("Dialog output:", data)
        if (data) {
          // this.addresses1[index] = data;
        }
      });
  }
}
