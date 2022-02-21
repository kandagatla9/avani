import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutUsComponent } from './block/about-us/about-us.component';
import { ContactUsComponent } from './block/contact-us/contact-us.component';
import { GreenSwingComponent } from './block/green-swing/green-swing.component';
import { HomeComponent } from './block/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'greenswing', component:GreenSwingComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'contactus', component:ContactUsComponent},
  {
    path: 'gallery',
    loadChildren: () =>
      import('./feature/gallery-module/gallery-module.module').then((m) => m.GalleryModuleModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
