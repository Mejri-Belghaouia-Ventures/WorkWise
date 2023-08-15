import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.css']
})
export class LoadingComponentComponent implements OnInit {
  loading=true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>this.loading=true,3000);
  }

}
