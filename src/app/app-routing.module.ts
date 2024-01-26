import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'payments', canActivate: [AuthGuard], loadChildren: () => import('./pages/payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'form', canActivate: [AuthGuard], loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
