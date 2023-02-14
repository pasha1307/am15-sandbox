import {Component, OnInit} from '@angular/core';
import {CONTACT_ADDRESSES, CONTACTS_USER1, CONTACTS_USER2} from "../../../assets/addresses-sample-data";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalUpdateComponent} from "../../shared/modal-update/modal-update.component";
import {ModalComponent} from "../../shared/modal/modal.component";
import {SmartyService} from "../../services/smarty.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  addresses1 = CONTACTS_USER1;
  addresses2 = CONTACTS_USER2;

  constructor(private dialog: MatDialog, private smService: SmartyService) {
  }

  ngOnInit() {
    this.smService.ontest();
  }

  onUpdate(item: any, index: number) {
    const config = new MatDialogConfig();
    config.width = '900px';
    config.autoFocus = false;
    config.data = item;
    const dialogRef = this.dialog.open(ModalUpdateComponent, config);
    dialogRef.afterClosed().subscribe(data => {
      console.log("Dialog output:", data)
      if (data) {
        this.addresses1[index] = data;
      }
    });

    console.log('ITEM and Index', item, index);
  }

  onUpdateTwo(item: any, index: number) {
    const config = new MatDialogConfig();
    config.width = '900px';
    config.autoFocus = false;
    config.data = item;
    const dialogRef = this.dialog.open(ModalUpdateComponent, config);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.addresses2[index] = data;
        console.log("Dialog output:", data)
      }

    });

    console.log('ITEM and Index', item, index);
  }

  onCreate(arr: any) {
    const config = new MatDialogConfig();
    config.width = '600px';
    config.minHeight = '400px';
    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(data => {
      if (data.city) {
        const sadr = data.address2 ? 'two' : 'one';
        const obj = {
          type: data.type,
          street_line: data.address,
          city: data.city,
          state: data.state,
          zipcode: data.postalCode,
          secondary: sadr,
          entries: data.address2,
          source: 'all'
        }
        if (arr === 'a1') {
          console.log("DATA -1 :", data);
          this.addresses1.push(obj)
        } else {
          console.log("DATA -2 :", data);
          this.addresses2.push(obj)
        }
      }
    })
  }
}
