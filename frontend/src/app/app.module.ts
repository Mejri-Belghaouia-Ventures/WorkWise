import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './Auth/login-component/login-component.component';
import { SignUpComponentComponent } from './Auth/sign-up-component/sign-up-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SignUpComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
