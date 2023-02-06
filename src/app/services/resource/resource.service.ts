import { Injectable } from '@angular/core';
import { IShiftResource } from 'src/app/models/resource';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  resources: IShiftResource[] = [];

  constructor() {}

  createResource(data: IShiftResource) {
    this.resources.push(data);
  }
  updateResource(data: IShiftResource, id: number) {
    this.resources = this.resources.map((resource) => {
      if (resource.id === id) return data;
      return resource;
    });
  }
  deleteResource(id: number) {
    this.resources = [
      ...this.resources.filter((resource) => resource.id !== id),
    ];
  }
}
