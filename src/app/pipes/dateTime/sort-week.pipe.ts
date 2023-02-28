import { KeyValue } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { weekSorter } from 'src/app/constants/global';

@Pipe({
  name: 'sortWeek',
})
export class SortWeekPipe implements PipeTransform {
  transform(value: KeyValue<any, any>[] | null, ...args: unknown[]): any[] {
    if (!value) return [];
    return value.sort(
      (a, b) => Number(weekSorter[a.key]) - Number(weekSorter[b.key])
    );
  }
}
