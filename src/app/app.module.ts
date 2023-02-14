import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from "@angular/material/button";
import {DashComponent} from './dash/dash.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {NavComponent} from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {AddressFormComponent} from './address-form/address-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {CaseComponent} from './pages/case/case.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {WorkbasketComponent} from './pages/workbasket/workbasket.component';
import {HomeComponent} from './pages/home/home.component';
import {DTableComponent} from './pages/dash/d-table/d-table.component';
import {DChartComponent} from './pages/dash/d-chart/d-chart.component';
import {MatTableModule} from "@angular/material/table";
import {AplIntakeComponent} from './pages/case/apl-intake/apl-intake.component';
import {AplAdjudicationComponent} from './pages/case/apl-adjudication/apl-adjudication.component';
import {AplHearingComponent} from './pages/case/apl-hearing/apl-hearing.component';
import {AplClosureComponent} from './pages/case/apl-closure/apl-closure.component';
import {AplTasksComponent} from './pages/case/apl-tasks/apl-tasks.component';
import {CaseOpenComponent} from './pages/case/case-open/case-open.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {DTaskComponent} from './pages/dash/d-task/d-task.component';
import {DIcComponent} from './pages/dash/d-ic/d-ic.component';
import {TaskCorrComponent} from './pages/tasks/task-corr/task-corr.component';
import {TaskIcComponent} from './pages/tasks/task-ic/task-ic.component';
import {MychartComponent} from './mychart/mychart.component';
import {NgChartsConfiguration, NgChartsModule} from "ng2-charts";
import {TaskHomeComponent} from "./pages/tasks/task-home/task-home.component";
import {MyLineChartComponent} from './my-line-chart/my-line-chart.component';
import {HttpClientModule} from "@angular/common/http";
import {ModalComponent} from './shared/modal/modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AddressPegaComponent} from './address-pega/address-pega.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ModalUpdateComponent} from './shared/modal-update/modal-update.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {NavListComponent} from './nav/nav-list/nav-list.component';
import {WbHomeComponent} from './pages/workbasket/wb-home/wb-home.component';
import {WbIntakeComponent} from './pages/workbasket/wb-intake/wb-intake.component';
import {AdminComponent} from './pages/admin/admin.component';
import {PgHeaderComponent} from './nav/pg-header/pg-header.component';
import {MyworkComponent} from './pages/mywork/mywork.component';
import {MyAppealsComponent} from './pages/mywork/my-appeals/my-appeals.component';
import {MyTasksComponent} from './pages/mywork/my-tasks/my-tasks.component';
import {MyReportsComponent} from './pages/mywork/my-reports/my-reports.component';
import {MyTeamComponent} from './pages/mywork/my-team/my-team.component';
import {MyallComponent} from './pages/mywork/myall/myall.component';
import {MainHeaderComponent} from './nav/main-header/main-header.component';
import {TabsModule} from 'smart-webcomponents-angular/tabs';
import {CustomStepperComponent} from './components/custom-stepper/custom-stepper.component';
import {CdkStepperModule} from "@angular/cdk/stepper";
import {NavStepperComponent} from './components/nav-stepper/nav-stepper.component';
import {AdjOverviewComponent} from './pages/case/apl-adjudication/sections/adj-overview/adj-overview.component';
import {AdjExemptionComponent} from './pages/case/apl-adjudication/sections/adj-exemption/adj-exemption.component';
import {
  AdjInconsistencyComponent
} from './pages/case/apl-adjudication/sections/adj-inconsistency/adj-inconsistency.component';
import {
  AdjVerificationComponent
} from './pages/case/apl-adjudication/sections/adj-verification/adj-verification.component';
import {AdjDiscretionComponent} from './pages/case/apl-adjudication/sections/adj-discretion/adj-discretion.component';
import {AdjMilestoneComponent} from './pages/case/apl-adjudication/sections/adj-milestone/adj-milestone.component';
import {AdjAptcComponent} from './pages/case/apl-adjudication/sections/adj-aptc/adj-aptc.component';
import {MatNativeDateModule} from "@angular/material/core";
import {CreateInconComponent} from './pages/case/apl-adjudication/modals/create-incon/create-incon.component';
import {CustomStepComponent} from './pages/case/apl-adjudication/custom-step/custom-step.component';
import {NewInconDialogComponent} from "./shared/dialogs/new-incon-dialog/new-incon-dialog.component";

// @ts-ignore
// import {MaterialTabsModule} from 'angular-vertical-material-tabs/dist/material-tabs';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NavComponent,
    AddressFormComponent,
    CaseComponent,
    WorkbasketComponent,
    HomeComponent,
    DTableComponent,
    DChartComponent,
    AplIntakeComponent,
    AplAdjudicationComponent,
    AplHearingComponent,
    AplClosureComponent,
    AplTasksComponent,
    CaseOpenComponent,
    DTaskComponent,
    DIcComponent,
    TaskCorrComponent,
    TaskIcComponent,
    TaskHomeComponent,
    MychartComponent,
    MyLineChartComponent,
    ModalComponent,
    AddressPegaComponent,
    ContactComponent,
    ModalUpdateComponent,
    NavListComponent,
    WbHomeComponent,
    WbIntakeComponent,
    AdminComponent,
    PgHeaderComponent,
    MyworkComponent,
    MyAppealsComponent,
    MyTasksComponent,
    MyReportsComponent,
    MyTeamComponent,
    MyallComponent,
    MainHeaderComponent,
    CustomStepperComponent,
    NavStepperComponent,
    AdjOverviewComponent,
    AdjExemptionComponent,
    AdjInconsistencyComponent,
    AdjVerificationComponent,
    AdjDiscretionComponent,
    AdjMilestoneComponent,
    AdjAptcComponent,
    CreateInconComponent,
    CustomStepComponent,
    NewInconDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    NgChartsModule,
    HttpClientModule,
    MatDialogModule,
    MatTooltipModule,
    TabsModule,
    CdkStepperModule,
    MatDatepickerModule,
    MatNativeDateModule
    // MaterialTabsModule
  ],
  providers: [{provide: NgChartsConfiguration, useValue: {generateColors: true}}],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, CreateInconComponent]
})
export class AppModule {
}
