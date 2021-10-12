import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileSyarikatPage } from './profile-syarikat.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileSyarikatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileSyarikatPageRoutingModule {}
