import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  task = '';
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    // @ts-ignore
    if (history.state.data) {
      this.task = history.state.data
      console.log('extras', history.state.data)
    }
    console.log('URL', this.router.url)
    // this.router.getCurrentNavigation().extras.state
    // console.log('PATH', this.route.pathFromRoot)
    //   console.log('SNAP', this.route.snapshot.paramMap)
    //
    //   this.route.queryParamMap.subscribe(p => {
    //     console.log('Map Params', p);
    //   })
  }
}
