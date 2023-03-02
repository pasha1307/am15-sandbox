import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AppealService} from "../../../services/appeal.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-new-phone-dialog',
    templateUrl: './new-phone-dialog.component.html',
    styleUrls: ['./new-phone-dialog.component.scss']
})
export class NewPhoneDialogComponent {
    form = this.fb.group(
        {
            txtPrefnc: [false],
            phoneType: [''],
            phone: ['', Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')],
            extNo: [''],
            contractTellInfoId: [''],
            appealId: [''],
            contactId: [''],
        }
    );

    constructor(private fb: FormBuilder, private aplService: AppealService, private dialog: MatDialogRef<NewPhoneDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data: any) {
    }

    onSubmit() {
      this.dialog.close(this.form.value)
    }

  onCancel() {
this.dialog.close()
  }
}
