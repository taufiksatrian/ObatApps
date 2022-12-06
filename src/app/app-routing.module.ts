import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'obat',
    loadChildren: () => import('./obat/obat.module').then( m => m.ObatPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'obat-tambah',
    loadChildren: () => import('./obat-tambah/obat-tambah.module').then( m => m.ObatTambahPageModule)
  },
  {
    path: 'obat-edit/:id',
    loadChildren: () => import('./obat-edit/obat-edit.module').then( m => m.ObatEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
