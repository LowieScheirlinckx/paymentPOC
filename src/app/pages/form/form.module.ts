import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';

import { FormComponent } from './form.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AntdModule } from '../../antd/antd.module';

@NgModule({
  imports: [FormRoutingModule, FormsModule, AntdModule, ReactiveFormsModule],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class FormModule { }
