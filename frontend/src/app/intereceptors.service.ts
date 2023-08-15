import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IntereceptorsService  implements HttpInterceptor{

  constructor(private store:Store) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var auth=this.store.selectSnapshot(state=>state.AuthStore?.token);
    let tokenReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${auth}`
      }
    })

    return next.handle(tokenReq);
  }
  
}
