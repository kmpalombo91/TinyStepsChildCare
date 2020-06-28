import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  mChecked: string = "Satisfactory";
  aChecked: string = "Satisfactory";
  mComments: string;
  aComments: string;

  constructor() { }

  setRadio(e: string) {
    this.mChecked = e;
  }
  setARadio(e: string) {
    this.aChecked = e;
  }

  onSubmit(name: string) {
    if (!this.mChecked) {
      return false;
    }
    return this.mChecked === name;
  }

  onASubmit(name: string) {
    if (!this.aChecked) {
      return false;
    }
    return this.aChecked === name;
  }

  ngOnInit(): void {
  }

}
