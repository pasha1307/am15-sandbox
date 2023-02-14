import {Component, Input} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {INTAKE_STEPS} from "../../../shared/data/stepper-appeal-data";

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
export class AplIntakeComponent {
  menu = INTAKE_STEPS;
  err = 'ERROROWWERWRERE';
  completed = false;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {
  }

  onTest() {
    // this.firstFormGroup.get('firstCtrl')?.setValue('TRATATATAT');
    console.log(this.firstFormGroup.value)
  }

  onFoo(index: number) {
    this.err = '';
    this.completed = !this.completed;
  }

  completeStep(): void {
    this.completed = true;
  }
}
