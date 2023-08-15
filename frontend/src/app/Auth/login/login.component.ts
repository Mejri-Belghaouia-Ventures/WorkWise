import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidService } from '../valid.service';
import { LoginService } from 'src/app/Services/login.service';
import {Store} from "@ngxs/store"
import { SetIsAuth, SetToken, SetUser } from 'src/app/Store/action';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar:MatSnackBar,private formbuilder:FormBuilder,private store:Store,private LoginService:LoginService,private ValidService:ValidService) { 
    this.LoginFrom=this.formbuilder.group({
      email:this.emailRegister,
      password:this.passwordRegister
     });
  }



  emailRegister=new FormControl('',[Validators.required,Validators.email],this.ValidService.EmailValide());
  passwordRegister=new FormControl('',[Validators.required]);
  ngOnInit(): void {
   
  }

  LoginFrom:FormGroup;


  getEmailError(){
    if(this.emailRegister.touched){
      if(this.emailRegister.hasError('required')){
        return "Email Required";
      }else if(this.emailRegister.hasError("email")){
        return "email Invalid";
      }else if(this.emailRegister.hasError("EmailNotFound")){
        return "Email Not Found"
      }
    }
    return "";
  }

  getPasswordError(){
    if(this.passwordRegister.touched){
      if(this.passwordRegister.hasError('required')){
        return "Password Required"
      }
    }
    return "";
  }

   
  loginError:string="";
  LoginUser(){
    if(this.LoginFrom.valid){
        this.LoginService.login(this.LoginFrom.value).subscribe((res:any)=>{
            this.store.dispatch([
                new SetToken(res.token),
                new SetIsAuth(true),
                new SetUser(res.user)
            ]);
        },(error:any)=>{
          if(error.error=='INVALID_CREDENTIALS'){
              this.loginError="INVALID CREDENTIALS";
          }else if(error.error=="USER_NOT_FOUND"){
            this.loginError=" USER NOT FOUND";
          }else if(error.error=="User_Disabled"){
            this.loginError="USER DISABLED";
          }
          this.snackbar.open(this.loginError,"close",{
               duration:5000
          }
          );
        })
    }else{
      this.emailRegister.markAsTouched();
      this.passwordRegister.markAsTouched();
    }
  }

}
