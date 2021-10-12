import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstTimeLoginPageRoutingModule } from './first-time-login-routing.module';

import { FirstTimeLoginPage } from './first-time-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstTimeLoginPageRoutingModule
  ],
  declarations: [FirstTimeLoginPage]
})
export class FirstTimeLoginPageModule {}
