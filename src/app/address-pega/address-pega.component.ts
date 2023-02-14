import {Component, OnInit} from '@angular/core';
import {STATES} from "../../assets/list-states";
import {ADDRESS_TYPES} from "../../assets/list-addess-types";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, debounceTime, filter, Observable, of, startWith, switchMap} from "rxjs";
import {SmartyService} from "../services/smarty.service";
import {MatDialog} from "@angular/material/dialog";
import {map} from "rxjs/operators";
import {AutoAddress, Search, Secondary} from "../address-form/address-form.component";

@Component({
  selector: 'app-address-pega',
  templateUrl: './address-pega.component.html',
  styleUrls: ['./address-pega.component.scss']
})
export class AddressPegaComponent implements OnInit {
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
  pegaForm = this.fb.group({
    type: ['', Validators.required],
    address: [null, Validators.required],
    address2: '',
    city: [null, Validators.required],
    county: [null],
    state: ['', Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    secondary: ['one', Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private smServive: SmartyService, private dialog: MatDialog) {
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
    return this.pegaForm.get('type');
  }

  get ad1() {
    return this.pegaForm.get('address');
  }

  get ad2() {
    return this.pegaForm.get('address2');
  }

  get isSecond() {
    return this.pegaForm.get('secondary');
  }

  get city() {
    return this.pegaForm.get('city');
  }

  get county() {
    return this.pegaForm.get('county');
  }

  get state() {
    return this.pegaForm.get('state');
  }

  get zip() {
    return this.pegaForm.get('postalCode');
  }

  onApt(v: Secondary) {
    this.myAddress = v;
    this.isSecondary = false;
    this.adType?.setValue('Mailing');
    this.isSecond?.setValue('two');
    this.ad1?.setValue(this.myAddress['street_line']);
    this.ad2?.setValue(this.myAddress['secondary']);
    this.city?.setValue(this.myAddress['city']);
    this.state?.setValue(this.myAddress['state']);
    this.zip?.setValue(this.myAddress['zipcode']);
    this.isAddressSelected = true;
    console.log('CLICK APARTMENT', v)
  }

  displayFn(term: any) {
    return term && term.street_line ? term.street_line : '';
  }

  onFilter(value: string) {
    return this.smServive.autoStreet(value.toLowerCase());
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
      if (this.secondArr && this.secondArr?.length > 1) {
        this.isSecondary = true;
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
    alert(f.value);
  }

  onCancel(): void {
    this.pegaForm.reset();
  }
}
