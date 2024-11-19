import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { BricolIllustrationPhoneComponent } from './components/bricol-illustration-phone/bricol-illustration-phone.component';
import { BricolIllustrationWebComponent } from './components/bricol-illustration-web/bricol-illustration-web.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    LandingSectionComponent,
    BricolIllustrationPhoneComponent,
    BricolIllustrationWebComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
