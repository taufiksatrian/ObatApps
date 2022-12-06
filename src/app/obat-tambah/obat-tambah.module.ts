import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObatTambahPageRoutingModule } from './obat-tambah-routing.module';

import { ObatTambahPage } from './obat-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObatTambahPageRoutingModule
  ],
  declarations: [ObatTambahPage]
})
export class ObatTambahPageModule {}
