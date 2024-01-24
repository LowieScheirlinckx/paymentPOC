import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';

import { FormComponent } from './form.component';

import { FormsModule } from '@angular/forms';

import { AntdModule } from '../../antd/antd.module';

@NgModule({
  imports: [FormRoutingModule, FormsModule, AntdModule],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class FormModule { }
