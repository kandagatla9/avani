import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  executeContact = false
  constructor() { }

  ngOnInit(): void {
    if(window.screen.width < 991){
      this.executeContact = true
    }
  }

}
