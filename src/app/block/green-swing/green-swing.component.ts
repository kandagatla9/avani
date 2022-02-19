import { Component, OnInit } from '@angular/core';
declare function myMethod(): any;
@Component({
  selector: 'app-green-swing',
  templateUrl: './green-swing.component.html',
  styleUrls: ['./green-swing.component.scss']
})
export class GreenSwingComponent implements OnInit {
  play=true
  pause=false
  constructor() { }

  ngOnInit(): void {
    myMethod();
  }
  execute(){
    this.play=false
    this.pause=true
  }


}
