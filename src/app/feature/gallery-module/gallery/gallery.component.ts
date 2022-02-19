import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataShareService } from 'src/app/shared/data-share.service';
import { GalleryViewComponent } from '../gallery-view/gallery-view.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
 count=[]
 len
  constructor(private actRoute:ActivatedRoute, private service:DataShareService) { }
  ngOnInit(): void { 
    
     this.len = this.service.gallery.length
     for(let i=0; i<this.len; i++){
      const count = this.service.gallery[i].length
      this.count.push(count)
     } 
    
  }

}
