import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObatEditPage } from './obat-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ObatEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObatEditPageRoutingModule {}
