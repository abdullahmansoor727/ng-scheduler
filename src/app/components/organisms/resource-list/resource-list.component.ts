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
  resources: IShiftResource[] = this.resourceService.resources;

  constructor(private resourceService: ResourceService) {}

  getEntityName() {
    return this.entity
      ? this.entity
          .split('')
          .map((letter, index) => {
            if (!index) return letter.toUpperCase();
            return letter;
          })
          .join('')
      : 'Resources';
  }

  ngOnInit(): void {}
}
