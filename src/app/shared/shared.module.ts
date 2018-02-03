import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalendarModule, PaginatorModule } from 'primeng/primeng';
import { DropOrgTreeComponent } from './drop-org-tree/drop-org-tree.component';
import { TreeModule } from 'primeng/primeng';
import { SwitchChooseComponent } from './switch-choose/switch-choose.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { StaffSearchComponent } from './staff-search/staff-search.component';
import { StaffCountComponent } from './staff-count/staff-count.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { TeamScheduleSearchComponent } from './team-schedule-search/team-schedule-search.component';
import { SwitchSearchComponent } from './switch-search/switch-search.component';
import { LeaveSearchComponent } from './leave-search/leave-search.component';
import { AttendanceCheckComponent } from './attendance-check/attendance-check.component';

@NgModule({
  imports: [
    CommonModule,
    TreeModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    PaginatorModule,
    RouterModule
  ],
  declarations: [
    DropOrgTreeComponent,
    SwitchChooseComponent,
    InputSelectComponent,
    NavbarComponent,
    HomeComponent,
    StaffDetailComponent,
    StaffSearchComponent,
    StaffCountComponent,
    StaffEditComponent,
    TeamScheduleSearchComponent,
    SwitchSearchComponent,
    LeaveSearchComponent,
    AttendanceCheckComponent
  ],
  exports: [
    DropOrgTreeComponent,
    SwitchChooseComponent,
    InputSelectComponent,
    NavbarComponent,
    HomeComponent,
    StaffDetailComponent,
    StaffSearchComponent,
    StaffCountComponent,
    StaffEditComponent,
    TeamScheduleSearchComponent,
    SwitchSearchComponent,
    LeaveSearchComponent,
    AttendanceCheckComponent
  ]
})
export class SharedModule { }
