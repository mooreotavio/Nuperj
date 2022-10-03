import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

import { ComponentsRoutingModule } from './components-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatTabsModule
  ]
})
export class ComponentsModule { }
