import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  public paymentsData

  updatePayments() {
    this.paymentService.getPayments().subscribe(response => {
      this.paymentsData = response['payments'].map(element => {
        element.date = new Date(element.date).toLocaleDateString();
        return element;
    });
  });
  }
  constructor(private paymentService: PaymentService) { 
    this.updatePayments()
  }

  ngOnInit() { 

  }

}
