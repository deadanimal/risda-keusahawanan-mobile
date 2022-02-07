import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarianPageRoutingModule } from './carian-routing.module';

import { CarianPage } from './carian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarianPageRoutingModule
  ],
  declarations: [CarianPage]
})
export class CarianPageModule {}
