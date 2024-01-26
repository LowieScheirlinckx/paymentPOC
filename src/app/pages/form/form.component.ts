import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NonNullableFormBuilder, FormGroup } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';
import { NumberValidator } from '../../validators/number.validator';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private paymentService: PaymentService, private router: Router, private fb : NonNullableFormBuilder) { }
  validateForm: FormGroup<{
    amount: FormControl<string>;
    description:FormControl<string>;
  }> = this.fb.group({
    amount: ['', [Validators.required, NumberValidator()]],
    description:['',[Validators.required, Validators.minLength(1), Validators.maxLength(50)]]
  });
  
  submitForm() {
    if (this.validateForm.valid) {
      this.paymentService.processPayment(this.validateForm.value).subscribe(response => {
               window.location.href = response.checkout.href;
                
           });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
}
submitPayment() {
      
}

  ngOnInit() { 
    
  }

}
