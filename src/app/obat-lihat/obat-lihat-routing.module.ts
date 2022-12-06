import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObatLihatPage } from './obat-lihat.page';

const routes: Routes = [
  {
    path: '',
    component: ObatLihatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObatLihatPageRoutingModule {}
