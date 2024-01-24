import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators, NonNullableFormBuilder } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  minimumBedrag = 10.01
  maximumBedrag = 99.99
  bedrag = 50.00
  constructor(private paymentService: PaymentService, private router: Router) { }


  submitForm() {
    try {
        this.paymentService.processPayment({
            amount: { currency: 'EUR', value: '15.00'},
            description: 'test',
            redirectUrl: 'http://localhost:4200/welcome',
        }).subscribe(response => {
            console.log(response);
            window.location.href = response.checkout.href;

            
        });
    } catch (error) {
        console.error(error);
    }
}

  ngOnInit() { }

}
