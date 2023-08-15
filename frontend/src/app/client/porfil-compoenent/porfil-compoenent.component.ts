import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
@Component({
  selector: 'app-porfil-compoenent',
  templateUrl: './porfil-compoenent.component.html',
  styleUrls: ['./porfil-compoenent.component.css']
})
export class PorfilCompoenentComponent implements OnInit {

  constructor(private store:Store) { }

  name:any;
  ngOnInit(): void {
    this.name=this.store.selectSnapshot(s=>s.AuthStore.user["email"]);
  }

}
