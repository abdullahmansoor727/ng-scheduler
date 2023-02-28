import { Component, Input, OnInit } from '@angular/core';
import { IShiftResource } from 'src/app/models/resource';
import { ResourceService } from 'src/app/services/resource/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css'],
})
export class ResourceListComponent implements OnInit {
  @Input() entity?: string;
  resources: IShiftResource[] = [];

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.resources = this.resourceService.resources;
    this.resourceService.resourcesUpdated.subscribe((resources) => {
      this.resources = resources;
    });
  }
}
