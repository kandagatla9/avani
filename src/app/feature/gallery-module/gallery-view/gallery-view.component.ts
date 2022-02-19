import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataShareService } from 'src/app/shared/data-share.service';
declare function myMethod2(): any;
@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss']
})

export class GalleryViewComponent implements OnInit { 
  gallery
  title
  count
  constructor(private actRoute:ActivatedRoute, private service:DataShareService) { 
    
  } 

  ngOnInit(): void {    
    myMethod2();
    const id=this.actRoute.snapshot.params['id'] 
    this.gallery =this.service.gallery[id]
    this.count = this.service.gallery[id].length
    this.title =this.service.getData()[id]
  }
  

}
