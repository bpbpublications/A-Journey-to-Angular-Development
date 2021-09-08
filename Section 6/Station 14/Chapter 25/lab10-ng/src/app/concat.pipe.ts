import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    args.forEach((x) => {
      value = value + '-' + x;
    });
    return value;
  }
}
