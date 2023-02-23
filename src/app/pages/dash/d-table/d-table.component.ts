import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MY_APPEALS} from "../../../../assets/mock-data/my-appeals-data";

@Component({
  selector: 'app-d-table',
  templateUrl: './d-table.component.html',
  styleUrls: ['./d-table.component.scss']
})
export class DTableComponent implements OnInit {
  displayedColumns: string[] = ['aplId', 'type', 'subtype', 'created', 'expedite',
    'phase', 'profile', 'updated', 'plan', 'deadline', 'hearing',
    'actionDate', 'rfiDate', 'notes', 'status', 'stage'];
  dataSource = MY_APPEALS;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onApl(id: string, type: string, obj: any) {
    this.router.navigateByUrl(`/appeal/${id}/${type}`, {state: {data: obj}})
  }
}
