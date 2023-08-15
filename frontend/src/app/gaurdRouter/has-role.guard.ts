import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';

import { Observable } from 'rxjs';
Store
@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(private store:Store,private Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var auth=this.store.selectSnapshot(s=>s.AuthStore?.user["role"]);
      var isAuth=false;
          let role=route.data['role'][0];
          if(role==auth){
            isAuth=true;
          }
          if(!isAuth){
            window.alert("you are not authorized");
            this.Router.navigate(["/"]);
          }
          return isAuth || false;
  }
  
}
