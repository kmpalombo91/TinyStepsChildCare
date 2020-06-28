import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { FunctionsComponent } from './functions/functions.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ListComponent } from './list/list.component';
import { ChartComponent } from './chart/chart.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FunctionsComponent,
    ContentComponent,
    FooterComponent,
    ProfileComponent,
    HomeComponent,
    CalendarComponent,
    ScheduleComponent,
    ListComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    ScheduleModule,
  ],
  providers: [DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService,
    AgendaService,
    MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
