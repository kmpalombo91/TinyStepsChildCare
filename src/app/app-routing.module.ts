import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ListComponent } from './list/list.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'schedule', component: ScheduleComponent},
    {path: 'list', component: ListComponent},
    {path: 'chart', component: ChartComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }