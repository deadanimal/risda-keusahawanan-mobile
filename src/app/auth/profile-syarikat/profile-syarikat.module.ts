import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileSyarikatPageRoutingModule } from './profile-syarikat-routing.module';

import { ProfileSyarikatPage } from './profile-syarikat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileSyarikatPageRoutingModule
  ],
  declarations: [ProfileSyarikatPage]
})
export class ProfileSyarikatPageModule {}
