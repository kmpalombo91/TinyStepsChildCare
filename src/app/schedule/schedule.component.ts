import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, TimeScaleModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-schedule',
  providers: [DayService, WeekService],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public selectedDate: Date = new Date();
  public viewInterval: number= 2;
  public showWeekend: boolean = false;
  public isSelected: boolean = true;
  public timeScaleOptions: TimeScaleModel = { enable: true, slotCount: 5 };
  //public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  constructor() { }

  ngOnInit(): void {
  }

}
