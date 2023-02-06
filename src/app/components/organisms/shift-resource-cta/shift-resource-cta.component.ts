import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource/resource.service';

@Component({
  selector: 'app-shift-resource-cta',
  templateUrl: './shift-resource-cta.component.html',
  styleUrls: ['./shift-resource-cta.component.css'],
})
export class ShiftResourceCtaComponent implements OnInit {
  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {}

  addResource() {
    this.resourceService.createResource({
      id: Math.random() * 10,
      name: 'John Doe',
      availability: {
        mon: {
          day: true,
          night: true,
        },
        tue: {
          day: true,
          night: true,
        },
        wed: {
          day: true,
          night: true,
        },
        thurs: {
          day: true,
          night: true,
        },
        fri: {
          day: false,
          night: false,
        },
        sat: {
          day: false,
          night: false,
        },
        sun: {
          day: false,
          night: false,
        },
      },
      allocation: {
        day: 2,
        night: 1,
      },
    });
  }
}
