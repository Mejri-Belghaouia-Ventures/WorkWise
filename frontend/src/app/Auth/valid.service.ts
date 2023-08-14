import { Injectable } from '@angular/core';
import { AuthServicesService } from '../Services/auth-services.service';
import { switchMap, timer,map } from 'rxjs';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidService {

  constructor(private AuthServicesService:AuthServicesService) { }

  SearchByEmail(email:String){
    return timer(1000).pipe(
      switchMap(()=>{
        return this.AuthServicesService.ExistEmail(email); 
      })
    );
  }


  EmailValide(): AsyncValidatorFn {
		return (control: AbstractControl): any => {
			return this.SearchByEmail(control.value)
				.pipe(
					map((res: any) => {
						if (!res) {
							return { 'EmailNotFound': true };
						}
						return null;
					})
				);
		};
	}

  EmailValideSignUp(): AsyncValidatorFn {
		return (control: AbstractControl): any => {
			return this.SearchByEmail(control.value)
				.pipe(
					map((res: any) => {
						if (res) {
							return { 'EmailFound': true };
						}
						return null;
					})
				);
		};
	}

}
