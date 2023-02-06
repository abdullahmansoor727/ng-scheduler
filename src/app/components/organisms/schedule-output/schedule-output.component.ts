import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-output',
  templateUrl: './schedule-output.component.html',
  styleUrls: ['./schedule-output.component.css'],
})
export class ScheduleOutputComponent implements OnInit {
  schedules: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
