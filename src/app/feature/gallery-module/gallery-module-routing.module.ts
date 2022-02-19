import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryModuleComponent } from './gallery-module.component';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
   {path:"", component:GalleryModuleComponent,
  children: [
    {
      path:'',
      component:GalleryComponent
    },
    {
      path:'galleryview/:id', component:GalleryViewComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryModuleRoutingModule { }
