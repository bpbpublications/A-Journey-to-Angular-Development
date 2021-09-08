import { FormArray, FormControl, FormGroup } from '@angular/forms';

export function validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormArray) {
      for (const control1 of control.controls) {
        if (control1 instanceof FormControl) {
          control1.markAsTouched({
            onlySelf: true
          });
        }
        if (control1 instanceof FormGroup) {
          validateAllFormFields(control1);
        }
      }
    }
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      validateAllFormFields(control);
    }
  });
}
