import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCoverComponent } from './card-cover/card-cover.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MainCardComponent } from './main-card/main-card.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardCoverComponent,
    MainCardComponent,
    SmallCardComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    CardCoverComponent,
    MainCardComponent,
    SmallCardComponent,
    ContactFormComponent,
  ],
})
export class HomeModule { }
