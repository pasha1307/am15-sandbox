import {Component, Input} from '@angular/core';
import {CdkStepper} from "@angular/cdk/stepper";
import {StepperNav} from "../../shared/models/stepper-nav.model";
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-nav-stepper',
  templateUrl: './nav-stepper.component.html',
  styleUrls: ['./nav-stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: NavStepperComponent}]
})
export class NavStepperComponent extends CdkStepper {
  @Input() menu?: StepperNav[] = [];
  @Input() isOpened = true;
  isEACMS = new FormControl(true);

  onStep(index: number) {
    this.selectedIndex = index;
  }

  onToggle() {
    this.isOpened = !this.isOpened
  }
}
