import {Component} from '@angular/core';
import {CdkStepper} from "@angular/cdk/stepper";

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: CustomStepperComponent}]
})
export class CustomStepperComponent extends CdkStepper {

  onClick(index: number) {
    this.selectedIndex = index;
    // @ts-ignore
    this.steps.get(0).stepLabel = "Kakareku"
  }

}
