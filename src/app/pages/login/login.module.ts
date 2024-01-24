import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AntdModule } from '../../antd/antd.module';

@NgModule({
  imports: [LoginRoutingModule, FormsModule, AntdModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
