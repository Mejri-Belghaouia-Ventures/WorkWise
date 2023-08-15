import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.css']
})
export class LoadingComponentComponent implements OnInit {
  loading;

  @Input() public messageFromSignUp:any;
  
  constructor() { 
    console.log(this.messageFromSignUp);
    
    this.loading=this.messageFromSignUp==undefined ? true : false;
  }

  ngOnInit(): void {
    setTimeout(()=>this.loading=false,3000);
  }

}
