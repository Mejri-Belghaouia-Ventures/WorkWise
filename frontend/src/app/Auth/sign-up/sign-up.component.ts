import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthServicesService } from 'src/app/Services/auth-services.service';
import { Router } from '@angular/router';
import { ValidService } from '../valid.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  roles=["Client","Prestataire"]
  hide=true;
  constructor(private router:Router,private ValidService:ValidService,private formbuiled:FormBuilder,private AuthServicesService:AuthServicesService) {
    this.SignUpForm=this.formbuiled.group({
      email:this.emailRegister,
      password:this.PasswordRegister,
      role:this.RoleRegister
    });
   }

   emailRegister=new FormControl('',[Validators.required,
    Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,10}$')],this.ValidService.EmailValideSignUp());

    PasswordRegister = new FormControl('', [Validators.required]);
    RoleRegister=new FormControl('',[Validators.required]);
    getPasswordError(){
      if(this.PasswordRegister.touched){
        if(this.PasswordRegister.hasError("required")){
          return "You must enter a value";
        }
      }
      return '';
    }

    getRoleError(){
      if(this.RoleRegister.touched){
        if(this.RoleRegister.hasError("required")){
          return "You must enter a value";
        }
      }
      return '';
    }

    getErrorEmail(){
      if(this.emailRegister.touched){
        if(this.emailRegister.hasError("required")){
          return "You must enter a value";
        }else if(this.emailRegister.hasError("EmailFound")){
          return "Email Already Used";
        }else{
          return "Not A Valid Email";
        }
      }
      return '';
    }

  SignUpForm:FormGroup;
  ngOnInit(): void {
  }

  SignUpUser(){
    if(this.SignUpForm.valid){
      this.AuthServicesService.RegisterUser(
        this.SignUpForm.value
      ).subscribe((data:any)=>{
         this.router.navigate(["/"],{queryParams:{message:"UserAdded With Success"}});
      })
    }else{
      this.emailRegister.markAsTouched();
      this.RoleRegister.markAsTouched();
      this.PasswordRegister.markAsTouched();
    }
  }

}
