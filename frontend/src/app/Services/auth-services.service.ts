import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private http:HttpClient) {
  }
  RegisterUser(user:any){
    return this.http.post(`${environment.apiSpring}/signup`,user);
  }
}
