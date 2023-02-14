import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pg-header',
  templateUrl: './pg-header.component.html',
  styleUrls: ['./pg-header.component.scss']
})
export class PgHeaderComponent {
  @Input() icon?: string;
}
