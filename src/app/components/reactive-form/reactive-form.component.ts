import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        '',
        [Validators.required, Validators.minLength(3)],
        CustomValidators.shouldBeUnique
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        CustomValidators.cannotContainSpace,
      ]),
    }),
  });

  get username(): AbstractControl<string | null, string | null> {
    return this.form.get('account.username')!;
  }

  constructor() {}

  ngOnInit(): void {
    this.password().hasError('');
  }

  password(): AbstractControl<string | null, string | null> {
    return this.form.get('account.password')!;
  }

  /* username(): AbstractControl<string | null, string | null> {
    return this.form.get('username')!;
  } */

  login() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }

  log(x: any) {
    console.log(x);
  }
}

export class CustomValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };

    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'mosh') resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 5000);
    });
  }
}
