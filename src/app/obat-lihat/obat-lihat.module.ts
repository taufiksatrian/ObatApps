import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObatLihatPageRoutingModule } from './obat-lihat-routing.module';

import { ObatLihatPage } from './obat-lihat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObatLihatPageRoutingModule
  ],
  declarations: [ObatLihatPage]
})
export class ObatLihatPageModule {}
