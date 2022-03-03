import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideComponent } from '../left-side/left-side.component';
import {MatIconModule} from "@angular/material/icon";
import { BotSideComponent } from './bot-side/bot-side.component';
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [
    LeftSideComponent,
    BotSideComponent
  ],
  exports: [
    LeftSideComponent,
    BotSideComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class PortalModule { }
