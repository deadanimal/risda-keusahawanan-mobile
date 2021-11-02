import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukuTunaiPageRoutingModule } from './buku-tunai-routing.module';

import { BukuTunaiPage } from './buku-tunai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukuTunaiPageRoutingModule
  ],
  declarations: [BukuTunaiPage]
})
export class BukuTunaiPageModule {}
