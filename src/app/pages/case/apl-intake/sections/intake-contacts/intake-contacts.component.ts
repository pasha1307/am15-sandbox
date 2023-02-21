import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-intake-contacts',
  templateUrl: './intake-contacts.component.html',
  styleUrls: ['./intake-contacts.component.scss']
})
export class IntakeContactsComponent {
  @Input() person?: any
}
