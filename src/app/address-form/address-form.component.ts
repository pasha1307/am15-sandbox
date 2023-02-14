import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {SmartyService} from "../services/smarty.service";
import {buffer, bufferCount, catchError, debounceTime, filter, Observable, of, startWith, switchMap} from "rxjs";
import {map, shareReplay, tap} from "rxjs/operators";
import {STATES} from "../../assets/list-states";
import {ADDRESS_TYPES} from "../../assets/list-addess-types";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ModalComponent} from "../shared/modal/modal.component";

export interface Search {
  name: string;
}

export interface AutoAddress {
  street_line: string;
  secondary: string;
  city: string;
  state: string;
  zipcode: string;
  entries: number;
  source?: 'all' | 'postal';
}

// const foo = suggestion.street_line + whiteSpace + suggestion.secondary + " " + suggestion.city + ", " + suggestion.state + " " + suggestion.zipcode;
export interface Secondary {
  street_line: string;
  secondary: string;
  city: string;
  state: string;
  zipcode: string;
  entries?: number;
  type?: string;
}

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
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
  // firstName: [null, Validators.required],
  // lastName: [null, Validators.required],
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
              private smServive: SmartyService, private dialogRef: MatDialogRef<ModalComponent>) {
  }

  ngOnInit() {
    // this.smServive.autoSecond().subscribe(r => console.log('SECONDARTY RESP', r))
    // @ts-ignore
    // @ts-ignore
    // return this.smServive.autoStreet('Main').subscribe(r => console.log('RESULTS', r));
    this.isAddressSelected = false;
    this.filtered$ = this.myControl.valueChanges.pipe(startWith(''),
      debounceTime(300),
      filter((name) => !!name),
      switchMap((data: any) => this.smServive.autoStreet(data).pipe(map((r: AutoAddress) => r))),
      catchError((err) => of([{}]))
    );
    // this.test$ = this.filtered$.pipe(shareReplay());
    // this.test$.subscribe(r => console.log('TEST RES', r))
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

  private _filter(name: string): Search[] {
    const filterValue = name.toLowerCase();

    // @ts-ignore
    return this.options$.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  buildAddress(suggestion: Secondary) {
    let whiteSpace = "";
    const foo = suggestion.street_line + whiteSpace + suggestion.secondary + " " + suggestion.city + ", " + suggestion.state + " " + suggestion.zipcode;
    if (suggestion.secondary) {
      return this.smServive.autoSecond(suggestion).subscribe(r => console.log('SECOND RESP', r))
    }

    console.log('FOO', foo)
    return foo;
    // return suggestion.street_line + whiteSpace + suggestion.secondary + " " + suggestion.city + ", " + suggestion.state + " " + suggestion.zipcode;
  }

  onTest(val: any) {
    const ws = '';
    const {street_line, secondary, city, state, zipcode} = val;
    const sl = street_line.replace(/\s/g, '+');
    const sc = secondary.replace(/\s/g, '+');
    const cty = city.replace(/\s/g, '+');
    const st = state.replace(/\s/g, '+');
    const zp = zipcode.replace(/\s/g, '+');


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
        console.log('CLICK WITHOUT APT', val)
      }
      console.log('APT', this.secondArr);
    });
    console.log('VAL', val)
  }

  onSearch(e: any) {
    console.log('Event', e)
    console.log('FORM', this.sf.value)
  }

  onSubmit(f: FormGroup): void {
    console.log('submit');
  }

  onCancel(): void {
    this.addressForm.reset();
  }
}
