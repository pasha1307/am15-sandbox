import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-adj-overview',
  templateUrl: './adj-overview.component.html',
  styleUrls: ['./adj-overview.component.scss']
})
export class AdjOverviewComponent implements OnInit {
  @Input() formValue?: any;
  @Input() formStatus?: any;
  @Input() completed = false;
  err = 'ERROROWWERWRERE';
  ff = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.ff.get('firstCtrl')?.valueChanges.subscribe(v => {
      if (v) {
        this.completed = true;
      } else {
        this.completed = false;
      }

    })

  }

  onTest() {
    // this.firstFormGroup.get('firstCtrl')?.setValue('TRATATATAT');
    console.log('he')
  }

  onFoo(index: number) {
    this.err = '';
    this.completed = !this.completed;
  }

  completeStep(): void {
    this.completed = true;
  }
}
