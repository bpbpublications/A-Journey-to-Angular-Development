import { Directive } from '@angular/core';
import {
  AbstractControl, AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms';


@Directive({
  selector: '[uniqueProductCodeValidator][ngModel],[uniqueProductCodeValidator][FormControl]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: AsyncUniqueProductCodeValidator, multi: true }
  ]
})
export class AsyncUniqueProductCodeValidator implements AsyncValidator {

public MyA:string="Sukesh";
  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return this.productCodeValidator(control);
  }

  private productCodeValidator(control: AbstractControl): Promise<ValidationErrors | null> {
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
    const productCodeAlreadyExistList = ['e001', 'e009', 'e010'];
    return (productCodeAlreadyExistList.indexOf(value) > -1);
  }
}
