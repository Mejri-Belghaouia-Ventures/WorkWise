import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private islogin=new BehaviorSubject<boolean>(false);
  islogin$=this.islogin.asObservable();

  constructor(private http:HttpClient) { 
    const token=localStorage.getItem("token");
    this.islogin.next(!!token);
  }

  login(login:any){
    return this.http.post(`${environment.apiSpring}/auth/login`,login).pipe(
      tap((res:any)=>{
        this.islogin.next(true);
        localStorage.setItem("token",res.token);
      })
    );
  }

}
