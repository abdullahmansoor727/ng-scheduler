import { EventEmitter, Injectable } from '@angular/core';
import { IShiftResource } from 'src/app/models/resource';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  resources: IShiftResource[] = [];
  resourcesUpdated: EventEmitter<IShiftResource[]> = new EventEmitter();
  constructor() {}

  createResource(data: IShiftResource) {
    this.resources.push(data);
    this.resourcesUpdated.emit(this.resources);
  }
  updateResource(data: IShiftResource, id: number) {
    this.resources = this.resources.map((resource) => {
      if (resource.id === id) return data;
      return resource;
    });
    this.resourcesUpdated.emit(this.resources);
  }
  deleteResource(id: number) {
    this.resources = this.resources.filter((resource) => resource.id !== id);
    this.resourcesUpdated.emit(this.resources);
  }
}
