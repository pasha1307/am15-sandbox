import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DropdownsService} from "../../../services/dropdowns.service";

@Component({
  selector: 'app-case-create',
  templateUrl: './case-create.component.html',
  styleUrls: ['./case-create.component.scss']
})
export class CaseCreateComponent {
  aplTypes?:any;
  createAppeal = this.fb.group({
    aplFirstName: [null, [Validators.required, Validators.maxLength(35), Validators.pattern('^[a-zA-Z-]+')]],
    aplLastName: [null, [Validators.required, Validators.maxLength(35), Validators.pattern('^[a-zA-Z-]+')]],
    aplMiddleName: ['', [Validators.maxLength(35), Validators.pattern('^[a-zA-Z-]+')]],
    aplType: ['', Validators.required],
    gender: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,  private dialog: MatDialog,
              private dialogRef: MatDialogRef<CaseCreateComponent>, private drops: DropdownsService) {
    this.aplTypes = this.drops.getAplTypes();
    console.log('TT', this.aplTypes)
    const aplFirstName = this.createAppeal.get('aplFirstName')!;
    aplFirstName.valueChanges.subscribe(() => {
      return aplFirstName.patchValue(aplFirstName?.value, {emitEvent: false});
    });

    const aplMiddleName = this.createAppeal.get('aplMiddleName')!;
    aplMiddleName.valueChanges.subscribe(() => {
      aplMiddleName.patchValue(aplMiddleName.value, { emitEvent: false });
    });

    const aplLastName = this.createAppeal.get('aplLastName')!;
    aplLastName.valueChanges.subscribe(() => {
      aplLastName.patchValue(aplLastName.value, { emitEvent: false });
    });
  }
  hasError(controlName: string, errorName: string) {
    // @ts-ignore
    return this.createAppeal.controls[controlName].hasError(errorName);
  };
  onSubmit() {
    if (this.createAppeal.valid) {
      const appealPayload = {
        id: '0' + Math.floor(Math.random() * 100),
        notes: '',
        rfiDate: '',
        nextActionDate: '',
        expedited: "",
        highProfile: '',
        aplStatus: 'new',
        aplStage: 'Intake',
        aplLink: 'intake',
        aplId: "APL-" + Math.floor(Math.random() * 100),
        aplTypeT: this.createAppeal.value.aplType,
        aplSubType: "???",
        aplIssue: "???",
        status: "New",
        location: "Appeal Intake WB",
        phase: "Phase??",
        phaseChangedDate: "",
        reopenPhase: "",
        langAssitFlag: false,
        accommFlag: false,
        mdcd: true,
        smah: false,
        appCallReleaseHold: false,
        stateModel: "State Model??",
        state: "",
        intakeType: "",
        formType: "",
        receiptType: "",
        aplSubmittedBy: 'Appellant',
        pendedReason: "",
        pendedReqStartDate: "",
        pendedReqEndDate: "",
        xReference: "",
        xReferenceType: "",
        recieptDate: new Date(),
        hearingDate: "",
        planYear: "",
        eacmsRecievedDate: "",
        openStatusDate: "",
        adjudDeadline: "",
        ndFlag: true,
        ndStartDate: "",
        ndEndDate: "",
        ndName: "",
        expFlag: true,
        expFor: "",
        expReqGranted: true,
        expComments: "",
        langAssitComments: "",
        eligDecision: "",
        decisionDate: "",
        mktplcDecision: "",
        appReasonForAppeal: "",
        ackNotice: "",
        ackNoticeDate: "",
        ackNoticeGranted: "",
        hearingId: "",
        createdOn: new Date(),
        updatedOn: new Date(),
        aplType: this.createAppeal.value.aplType,
        contacts: [
          {
            firstName: this.createAppeal.value.aplFirstName,
            middleName: this.createAppeal.value.aplMiddleName,
            lastName: this.createAppeal.value.aplLastName,
            type: this.createAppeal.value.aplType,
          },
        ],
      };
      this.dialogRef.close(appealPayload);
      //   this.appealService
      //       .createAppeal(appealPayload)
      //       .pipe(filter((x) => !!x))
      //       .subscribe((resp) => {
      //         const appealId = resp.appealId;
      //         const appealType = resp.aplType;
      //         const firstName = resp.contact[0].firstName;
      //         const lastName = resp.contact[0].lastName;
      //         this.dialog
      //             .open(AppealConfirmationComponent, {
      //               data: { appealType: appealType, firstName: firstName, lastName: lastName, aplId: appealId },
      //             })
      //             .afterClosed()
      //             .subscribe(() => {
      //               this.store.dispatch(openTab(appealId, TabType.Appeal, appealId));
      //             });
      //       });
      // } else {
      //   this.createAppeal.markAllAsTouched();
      // }
    }
  }
}
