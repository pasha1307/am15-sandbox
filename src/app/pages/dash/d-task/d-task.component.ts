import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MY_CORR_TASKS} from "../../../../assets/mock-data/my-work-tasks";

@Component({
  selector: 'app-d-task',
  templateUrl: './d-task.component.html',
  styleUrls: ['./d-task.component.scss']
})
export class DTaskComponent implements OnInit {
  displayedColumns: string[] = ['taskId', 'aplId', 'phase', 'reqBy', 'reqOn', 'updated'];
  dataSource = MY_CORR_TASKS;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onApl(id: string, type: string, obj: any) {
    this.router.navigateByUrl(`/appeal/${id}/${type}`, {state: {data: obj}})
  }

  onTask(id: string, type: string, obj: any) {
    this.router.navigateByUrl(`/task/${id}/${type}`, {state: {data: obj}})
  }

}
