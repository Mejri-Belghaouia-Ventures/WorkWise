import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './Auth/login-component/login-component.component';
import { SignUpComponentComponent } from './Auth/sign-up-component/sign-up-component.component';

const routes: Routes = [
  {path:"",component:AppComponent},
  {path:"login",component:LoginComponentComponent},
  {path:"signup",component:SignUpComponentComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
