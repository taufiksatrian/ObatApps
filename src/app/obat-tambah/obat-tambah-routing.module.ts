import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObatTambahPage } from './obat-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: ObatTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObatTambahPageRoutingModule {}
