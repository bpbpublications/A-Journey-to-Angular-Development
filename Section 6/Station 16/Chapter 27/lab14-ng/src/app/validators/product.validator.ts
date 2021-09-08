import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductValidationService {

  public productCodeValidator(control: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateProductCode(control.value)) {
          resolve({ productCodeNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  private validateProductCode(value: string) {
    const UserList = ['e001', 'e009', 'e010'];
    return (UserList.indexOf(value) > -1);
  }

  public requiredFileType(FileType: string[], maxFileSize: number = 4190000) {
    return (control: FormControl) => {
      const CurrentFile = control.value;
      if (CurrentFile) {
        const CurrentFileType = CurrentFile.name.split('.')[1].toLowerCase();
        if (!FileType.includes(CurrentFileType)) {
          return { requiredFileType: true };
        } else if (CurrentFile.size > maxFileSize) {
          return { requiredFileSize: true };
        }
      }
      return null;
    };
  }


}
