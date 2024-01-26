import { AbstractControl, ValidatorFn } from "@angular/forms";


export function NumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value === null || value === undefined || value === '') {
        return null;
      }
      const parsedValue = parseFloat(value);
      if (isNaN(parsedValue)) {
        return { notANumber: true };
      }
      if (parsedValue < 10 || parsedValue > 100) {
        return { outOfRange: true };
      }
      return null;
    };
  }