import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SharedModule } from "../shared/shared.module";
import { ParcoursComponent } from './components/parcours/parcours.component';
import { OutilsComponent } from './components/outils/outils.component';


@NgModule({
  declarations: [
    AboutComponent,
    PresentationComponent,
    ParcoursComponent,
    OutilsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
]
})
export class AboutModule { }
