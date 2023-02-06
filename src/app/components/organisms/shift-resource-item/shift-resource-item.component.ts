import { Component, Input, OnInit } from '@angular/core';
import { IShiftResource } from 'src/app/models/resource';
import { ResourceService } from 'src/app/services/resource/resource.service';

@Component({
  selector: 'app-shift-resource-item',
  templateUrl: './shift-resource-item.component.html',
  styleUrls: ['./shift-resource-item.component.css'],
})
export class ShiftResourceItemComponent implements OnInit {
  @Input() data?: IShiftResource;
  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {}

  deleteResource() {
    console.log('deleteResource');
    this.resourceService.deleteResource(this.data?.id!);
  }
}
