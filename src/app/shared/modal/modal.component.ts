import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {STATES} from "../../../assets/list-states";
import {ADDRESS_TYPES} from "../../../assets/list-addess-types";
import {catchError, debounceTime, filter, Observable, of, startWith, switchMap} from "rxjs";
import {AutoAddress, Search, Secondary} from "../../address-form/address-form.component";
import {SmartyService} from "../../services/smarty.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  states = STATES;
  types = ADDRESS_TYPES;
  myAddress?: any;
  myControl = new FormControl<string | Search>('');
  filtered$?: Observable<any>;
  options$?: Observable<any>;
  test$?: Observable<any>;
  secondArr?: Secondary[];
  selectedAd?: any;
  isSecondary = false;
  sf = new FormGroup({});
  isAddressSelected = false;
  isAptSelected = false;
  addressForm = this.fb.group({
    type: ['', Validators.required],
    address: [null, Validators.required],
    address2: '',
    city: [null, Validators.required],
    county: [null],
    state: ['', Validators.required],
    postalCode: [null],
    secondary: ['one', Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,
              private smServive: SmartyService, private dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {

  }

  ngOnInit() {
    this.isAddressSelected = false;
    this.filtered$ = this.myControl.valueChanges.pipe(startWith(''),
      debounceTime(300),
      filter((name) => !!name),
      switchMap((data: any) => this.smServive.autoStreet(data).pipe(map((r: AutoAddress) => r))),
      catchError((err) => of([{}]))
    );
  }

  get adType() {
    return this.addressForm.get('type');
  }

  get ad1() {
    return this.addressForm.get('address');
  }

  get ad2() {
    return this.addressForm.get('address2');
  }

  get isSecond() {
    return this.addressForm.get('secondary');
  }

  get city() {
    return this.addressForm.get('city');
  }

  get county() {
    return this.addressForm.get('county');
  }

  get state() {
    return this.addressForm.get('state');
  }

  get zip() {
    return this.addressForm.get('postalCode');
  }

  onApt(v: Secondary) {
    console.log('myControl', this.myControl.value);
    this.myAddress = v;
    this.isSecondary = false;
    // this.isAptSelected = true;
    this.adType?.setValue('Mailing');
    this.isSecond?.setValue('two');
    this.ad1?.setValue(this.myAddress['street_line']);
    this.ad2?.setValue(this.myAddress['secondary']);
    this.city?.setValue(this.myAddress['city']);
    this.state?.setValue(this.myAddress['state']);
    this.zip?.setValue(this.myAddress['zipcode']);
    this.isAddressSelected = true;
    this.myControl.setValue('');
    this.sf.reset();
    console.log('CLICK APARTMENT', v)
  }


  displayFn(term: any) {
    return term && term.street_line ? term.street_line : '';
  }

  onFilter(value: string) {
    const filteredValue = value.toLowerCase();
    return this.smServive.autoStreet(value.toLowerCase());
    // return this.options$?.pipe(map((terms) => terms.filter((term: any) => term.includes(filteredValue))));
  }

  onTest(val: any) {
    const ws = '';
    const {street_line, secondary, city, state, zipcode} = val;
    const qq = '?search=1042+W+Center+St+Apt+A&selected=1042+W+Center+St+Apt+A+(24)+Orem+UT+84057';

    const qq1 = '?search=' + street_line + ws + secondary + " " + city + ", " + state + " " + zipcode + '&selected=' + street_line + ws + secondary + " " + city + ", " + state + " " + zipcode;

    this.smServive.autoSecond(val).subscribe(r => {
      this.secondArr = r.suggestions;
      if (this.secondArr && this.secondArr?.length > 0) {
        this.isSecondary = true;
      } else {
        this.myAddress = val;
        this.isSecondary = false;
        // this.isAptSelected = true;
        this.adType?.setValue('Mailing');
        this.isSecond?.setValue('two');
        this.ad1?.setValue(this.myAddress['street_line']);
        this.ad2?.setValue(this.myAddress['secondary']);
        this.city?.setValue(this.myAddress['city']);
        this.state?.setValue(this.myAddress['state']);
        this.zip?.setValue(this.myAddress['zipcode']);
        this.isAddressSelected = true;
        this.myControl.setValue('');
        this.sf.reset();
      }
    });
  }

  onSearch(e: any) {
    console.log('Event', e)
    console.log('FORM', this.sf.value)
  }

  onSubmit(f: FormGroup): void {
    console.log('Event', f.value)
    this.dialogRef.close(f.value)
  }

  onCancel(): void {
    console.log('Cancel');
    this.dialogRef.close(this.addressForm.value);
  }
}
