import { Component, OnInit, ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT } from '@angular/core';
import { FormGroup  } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators, NonNullableFormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  validateForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loginService.login(this.validateForm.value).subscribe(value => {if (value) {
        this.router.navigate(['/payments'])
      }})
      
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private loginService: LoginService, private router:Router, private fb: NonNullableFormBuilder) {
    loginService.logout()
  }
  ngOnInit() { }

}