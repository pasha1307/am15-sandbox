import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashComponent} from "./dash/dash.component";
import {CaseComponent} from "./pages/case/case.component";
import {WorkbasketComponent} from "./pages/workbasket/workbasket.component";
import {NavComponent} from "./nav/nav.component";
import {AplIntakeComponent} from "./pages/case/apl-intake/apl-intake.component";
import {AplAdjudicationComponent} from "./pages/case/apl-adjudication/apl-adjudication.component";
import {AplHearingComponent} from "./pages/case/apl-hearing/apl-hearing.component";
import {AplClosureComponent} from "./pages/case/apl-closure/apl-closure.component";
import {CaseOpenComponent} from "./pages/case/case-open/case-open.component";
import {AplTasksComponent} from "./pages/case/apl-tasks/apl-tasks.component";
import {TaskCorrComponent} from "./pages/tasks/task-corr/task-corr.component";
import {TaskIcComponent} from "./pages/tasks/task-ic/task-ic.component";
import {TaskHomeComponent} from "./pages/tasks/task-home/task-home.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {WbHomeComponent} from "./pages/workbasket/wb-home/wb-home.component";
import {WbIntakeComponent} from "./pages/workbasket/wb-intake/wb-intake.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {MyworkComponent} from "./pages/mywork/mywork.component";
import {MyAppealsComponent} from "./pages/mywork/my-appeals/my-appeals.component";
import {MyTasksComponent} from "./pages/mywork/my-tasks/my-tasks.component";
import {MyReportsComponent} from "./pages/mywork/my-reports/my-reports.component";
import {MyTeamComponent} from "./pages/mywork/my-team/my-team.component";
import {MyallComponent} from "./pages/mywork/myall/myall.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: '', component: MainShellComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'dash', component: DashComponent},
  {path: 'contacts', component: ContactComponent},
  {path: 'appeal', component: CaseOpenComponent},
  {
    path: 'appeal/:id', component: CaseComponent, children: [
      {path: '', component: CaseOpenComponent},
      {path: 'intake', component: AplIntakeComponent},
      {path: 'adjudication', component: AplAdjudicationComponent},
      {path: 'hearing', component: AplHearingComponent},
      {path: 'closure', component: AplClosureComponent},
      {path: 'tasks', component: AplTasksComponent},
      {path: '**', component: CaseComponent}
    ]
  },
  {
    path: 'task/:id', component: TaskHomeComponent, children: [
      {path: '', component: TaskHomeComponent},
      {path: 'corr', component: TaskCorrComponent},
      {path: 'ic', component: TaskIcComponent},
      {path: '**', component: TaskHomeComponent}
    ]
  },
  {
    path: 'wb', component: WorkbasketComponent, children: [
      {path: '', component: WbHomeComponent},
      {path: 'corr', component: TaskCorrComponent},
      {path: 'intake', component: WbIntakeComponent},
      {path: '**', component: WbHomeComponent}
    ]
  },
  {
    path: 'mywork', component: MyworkComponent, children: [
      {path: '', component: MyAppealsComponent},
      {path: 'appeals', component: MyAppealsComponent},
      {path: 'tasks', component: MyTasksComponent},
      {path: 'reports', component: MyReportsComponent},
      {path: 'team', component: MyTeamComponent},
      {path: '**', component: MyAppealsComponent}
    ]
  },
  {path: '**', component: DashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
