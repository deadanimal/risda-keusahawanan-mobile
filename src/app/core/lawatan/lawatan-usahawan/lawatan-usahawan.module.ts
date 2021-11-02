import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LawatanUsahawanPageRoutingModule } from './lawatan-usahawan-routing.module';

import { LawatanUsahawanPage } from './lawatan-usahawan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LawatanUsahawanPageRoutingModule
  ],
  declarations: [LawatanUsahawanPage]
})
export class LawatanUsahawanPageModule {}
