import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {STATES} from "../../../assets/list-states";
import {ADDRESS_TYPES} from "../../../assets/list-addess-types";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SmartyService} from "../../services/smarty.service";

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss']
})
export class ModalUpdateComponent implements OnInit {
  states = STATES;
  types = ADDRESS_TYPES;
  isReady = false;
  sm?: any;
  myData?: any;
  form = this.fb.group({
    type: [null, Validators.required],
    street_line: ['', Validators.required],
    is_second: ['', Validators.required],
    secondary: [''],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: ['']
  })

  constructor(private fb: FormBuilder,
              private smService: SmartyService,
              private dialogRef: MatDialogRef<ModalUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.myData = data;
    const d = this.myData;
    console.log('ADDRESS DATA', d)
    this.fb.group({
      // type: [d.type || '', Validators.required],
      street_line: [d.street_line || '', Validators.required],
      is_second: ['', Validators.required],
      secondary: [d.secondary || ''],
      city: [d.city || '', Validators.required],
      state: [d.state || '', Validators.required],
      zipcode: [d.zipcode || '']
    })

  }

  ngOnInit() {
    const d = this.myData;
    this.smService.getAddress(d).subscribe((r: any) => {
      this.sm = r[0]?.components;
      console.log('RESULTS?', r)
    });
    this.form.setValue({
      type: d.type,
      street_line: d.street_line,
      is_second: 'true',
      secondary: d.secondary,
      city: d.city,
      state: d.state,
      zipcode: d.zipcode
    });
    // const d = this.myData;
    // this.fb.group({
    //   type: [d.type || '', Validators.required],
    //   street_line: [d.street_line || '', Validators.required],
    //   is_second: ['', Validators.required],
    //   secondary: [d.secondary || ''],
    //   city: [d.city || '', Validators.required],
    //   county: [''],
    //   state: [d.state || '', Validators.required],
    //   zipcode: [d.zipcode || '', Validators.required]
    // })
  }

  onClose() {
    const d = this.myData;
    console.log("Cancel:", d)
    this.form.setValue({
      type: d.type,
      street_line: d.street_line,
      is_second: 'true',
      secondary: d.secondary,
      city: d.city,
      state: d.state,
      zipcode: d.zipcode
    });
    this.dialogRef.close();
  }

  onLookup() {
    const d = this.form.value;
    this.smService.getAddress(d).subscribe((r: any) => {
      this.sm = r[0]?.components;
      if (r.length) {
        this.isReady = true;
      } else {
        this.isReady = false;
      }
      console.log('LOOKUP', r)
    });
  }

  onSave() {
    this.dialogRef.close(this.form.value);
  }

}
