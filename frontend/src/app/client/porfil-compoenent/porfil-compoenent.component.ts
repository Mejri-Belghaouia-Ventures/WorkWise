import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LogOut } from 'src/app/Store/action';

@Component({
  selector: 'app-porfil-compoenent',
  templateUrl: './porfil-compoenent.component.html',
  styleUrls: ['./porfil-compoenent.component.css']
})
export class PorfilCompoenentComponent implements OnInit {

  constructor(private store:Store,private Router:Router) { }

  name:any;
  ngOnInit(): void {
    this.name=this.store.selectSnapshot(s=>s.AuthStore.user["email"]);
  }

  logout(){
    this.store.dispatch([
        new LogOut()
    ]);
    localStorage.removeItem("token");
    this.Router.navigate(["/"]);
  }

}
