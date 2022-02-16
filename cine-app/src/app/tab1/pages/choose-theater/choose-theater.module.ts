import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseTheaterPageRoutingModule } from './choose-theater-routing.module';

import { ChooseTheaterPage } from './choose-theater.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ChooseTheaterPageRoutingModule,
  ],
  declarations: [],
})
export class ChooseTheaterPageModule {}
