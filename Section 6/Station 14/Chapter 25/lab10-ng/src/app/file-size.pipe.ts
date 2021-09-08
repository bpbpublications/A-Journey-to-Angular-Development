import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  transform(value: number, ...args: number[]): string {
    let data = '';
    if (value >= (1024 * 1024 * 1024)) {
        data = (value / 1024 / 1024 / 1024).toFixed(2) + ' GB';
    } else if (value >= (1024 * 1024)) {
        data = (value / 1024 / 1024).toFixed(2) + ' MB';
    } else if (value >= 1024) {
        data = (value / 1024).toFixed(2) + ' KB';
    } else {
        data = value + ' B';
    }
    return data;
  }
}
