import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  public selectedDate: Date = new Date();
  public showWeekend: boolean = false;
  public workDays: number[] = [0, 1, 2, 3, 4, 5, 6];
  ngOnInit(): void {}
}
