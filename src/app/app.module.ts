import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './block/navbar/navbar.component';
import { FooterComponent } from './block/footer/footer.component';
import { HomeComponent } from './block/home/home.component';
import { AboutUsComponent } from './block/about-us/about-us.component';
import { GalleryBrochureComponent } from './shared/gallery-brochure/gallery-brochure.component';
import { GreenSwingComponent } from './block/green-swing/green-swing.component';
import { TestimonialsComponent } from './shared/testimonials/testimonials.component';
import { ContactUsComponent } from './block/contact-us/contact-us.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    GalleryBrochureComponent,
    GreenSwingComponent,
    TestimonialsComponent,
    ContactUsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
