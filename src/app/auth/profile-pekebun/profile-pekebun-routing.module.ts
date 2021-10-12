import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePekebunPage } from './profile-pekebun.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePekebunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePekebunPageRoutingModule {}
