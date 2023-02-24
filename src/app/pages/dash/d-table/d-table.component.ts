import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MY_APPEALS} from "../../../../assets/mock-data/my-appeals-data";
import {PAYLOAD_NEW_APL} from "../../../../assets/mock-data/new-appeal-payload";
import {APL_INTAKE_SAMPLE} from "../../../../assets/mock-data/intake-object-data";

@Component({
  selector: 'app-d-table',
  templateUrl: './d-table.component.html',
  styleUrls: ['./d-table.component.scss']
})
export class DTableComponent implements OnInit {
  displayedColumns: string[] = ['aplId', 'type', 'subtype', 'created', 'expedite',
    'phase', 'profile', 'updated', 'plan', 'deadline', 'hearing',
    'actionDate', 'rfiDate', 'notes', 'status', 'stage'];
  // dataSource = MY_APPEALS;
  // dataSource = PAYLOAD_NEW_APL;
  dataSource = APL_INTAKE_SAMPLE;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onApl(id: string, type: string, obj: any) {
    this.router.navigateByUrl(`/appeal/${id}/${type}`, {state: {data: obj}})
  }
}
