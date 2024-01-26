import { NgModule } from '@angular/core';

import { PaymentsRoutingModule } from './payments-routing.module';

import { PaymentsComponent } from './payments.component';
import { AntdModule } from '../../antd/antd.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [PaymentsRoutingModule, AntdModule, CommonModule],
  declarations: [PaymentsComponent],
  exports: [PaymentsComponent]
})
export class PaymentsModule { }
