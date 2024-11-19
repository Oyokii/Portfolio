import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualitesRoutingModule } from './actualites-routing.module';
import { ActualitesComponent } from './actualites.component';
import { SharedModule } from "../shared/shared.module";
import { BandeauComponent } from './components/bandeau/bandeau.component';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [
    ActualitesComponent,
    BandeauComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    ActualitesRoutingModule,
    SharedModule
]
})
export class ActualitesModule { }
