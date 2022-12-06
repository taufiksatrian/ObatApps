import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObatEditPageRoutingModule } from './obat-edit-routing.module';

import { ObatEditPage } from './obat-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObatEditPageRoutingModule
  ],
  declarations: [ObatEditPage]
})
export class ObatEditPageModule {}
