import { NgModule } from '@angular/core';
import {RouterModule,Routes}from "@angular/router"
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { PorfilCompoenentComponent } from './client/porfil-compoenent/porfil-compoenent.component';
import { IsAuthenticatedGuard } from './gaurdRouter/is-authenticated.guard';
import { HasRoleGuard } from './gaurdRouter/has-role.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:"client",component:PorfilCompoenentComponent,canActivate:[IsAuthenticatedGuard,HasRoleGuard],data:{
     role:[
       "Client"
      ]
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
