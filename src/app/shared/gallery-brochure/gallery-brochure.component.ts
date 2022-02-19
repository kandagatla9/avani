import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-brochure',
  templateUrl: './gallery-brochure.component.html',
  styleUrls: ['./gallery-brochure.component.scss']
})
export class GalleryBrochureComponent implements OnInit {
  Next=false
  constructor() { }

  ngOnInit(): void {
  }
  back(){
    this.Next=!this.Next
  }

}
