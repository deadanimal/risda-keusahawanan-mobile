import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePerniagaanPageRoutingModule } from './profile-perniagaan-routing.module';

import { ProfilePerniagaanPage } from './profile-perniagaan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePerniagaanPageRoutingModule
  ],
  declarations: [ProfilePerniagaanPage]
})
export class ProfilePerniagaanPageModule {}
