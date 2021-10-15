import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'first-time-login',
    loadChildren: () => import('./auth/first-time-login/first-time-login.module').then( m => m.FirstTimeLoginPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./auth/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-syarikat',
    loadChildren: () => import('./auth/profile-syarikat/profile-syarikat.module').then( m => m.ProfileSyarikatPageModule)
  },
  {
    path: 'profile-perniagaan',
    loadChildren: () => import('./auth/profile-perniagaan/profile-perniagaan.module').then( m => m.ProfilePerniagaanPageModule)
  },
  {
    path: 'profile-pekebun',
    loadChildren: () => import('./auth/profile-pekebun/profile-pekebun.module').then( m => m.ProfilePekebunPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./core/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'insentif',
    loadChildren: () => import('./core/insentif/insentif.module').then( m => m.InsentifPageModule)
  },
  {
    path: 'aliran-tunai',
    loadChildren: () => import('./core/aliran-tunai/aliran-tunai.module').then( m => m.AliranTunaiPageModule)
  },
  {
    path: 'tambah-tunai-masuk',
    loadChildren: () => import('./core/modal/tambah-tunai-masuk/tambah-tunai-masuk.module').then( m => m.TambahTunaiMasukPageModule)
  },
  {
    path: 'tambah-tunai-keluar',
    loadChildren: () => import('./core/modal/tambah-tunai-keluar/tambah-tunai-keluar.module').then( m => m.TambahTunaiKeluarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
