import { Pipe, PipeTransform } from '@angular/core';
import { DaysOfTheWeek } from 'src/app/constants/global';

@Pipe({
  name: 'dayOfWeek',
})
export class DayOfWeekPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return DaysOfTheWeek[value as keyof typeof DaysOfTheWeek];
  }
}
