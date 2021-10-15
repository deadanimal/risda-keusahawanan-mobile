import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahTunaiKeluarPageRoutingModule } from './tambah-tunai-keluar-routing.module';

import { TambahTunaiKeluarPage } from './tambah-tunai-keluar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahTunaiKeluarPageRoutingModule
  ],
  declarations: [TambahTunaiKeluarPage]
})
export class TambahTunaiKeluarPageModule {}
