import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryModuleRoutingModule } from './gallery-module-routing.module'; 
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryModuleComponent } from './gallery-module.component';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';


@NgModule({
  declarations: [ GalleryComponent, GalleryModuleComponent, GalleryViewComponent],
  imports: [
    CommonModule,
    GalleryModuleRoutingModule
  ]
})
export class GalleryModuleModule { }
