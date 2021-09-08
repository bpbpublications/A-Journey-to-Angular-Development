import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureTest',
  pure:false
})
export class ImpureTestPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    if (localStorage.myValue) {
      return value + parseInt(localStorage.myValue);
    } else {
      return value;
    }
  }
}
