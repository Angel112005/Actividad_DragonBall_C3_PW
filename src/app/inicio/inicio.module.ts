import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterTransformationsComponent } from '../character-transformations/character-transformations.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CharacterTransformationsComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
