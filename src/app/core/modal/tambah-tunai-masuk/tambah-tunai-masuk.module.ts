import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahTunaiMasukPageRoutingModule } from './tambah-tunai-masuk-routing.module';

import { TambahTunaiMasukPage } from './tambah-tunai-masuk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahTunaiMasukPageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [TambahTunaiMasukPage]
})
export class TambahTunaiMasukPageModule {}
