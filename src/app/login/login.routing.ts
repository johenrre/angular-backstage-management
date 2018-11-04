import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoginGuard],
})
export class LoginRouting {}
