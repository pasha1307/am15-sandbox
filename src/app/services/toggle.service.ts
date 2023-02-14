import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class ToggleService {
  toggleSide: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  isOpened = true;

  set toOpen(a: boolean) {
    this.isOpened = a;
  }

  toggle() {
    this.isOpened = !this.isOpened;
    // return this.toggleSide.next(null);
  }

}
