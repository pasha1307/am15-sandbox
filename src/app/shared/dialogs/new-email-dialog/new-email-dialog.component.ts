import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AppealService} from "../../../services/appeal.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-email-dialog',
  templateUrl: './new-email-dialog.component.html',
  styleUrls: ['./new-email-dialog.component.scss']
})
export class NewEmailDialogComponent {
  form = this.fb.group(
      {
        emailPrefn: [false],
        emailType: [''],
        email: ['', Validators.email],
        contactEmailId: [''],
        contactId: [''],
        appealId: [''],
      },
      {}
  );

  constructor(private fb: FormBuilder, private aplService: AppealService, private dialog: MatDialogRef<NewEmailDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
  }

  onSubmit() {
    this.dialog.close(this.form.value)
  }

  onCancel() {
    this.dialog.close()
  }
}
