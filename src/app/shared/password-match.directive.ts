import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

//Poniżej te same nazwy zmiennych co w register.component.ts
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if(!password || !confirmPassword) {
        return null;
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true }
}