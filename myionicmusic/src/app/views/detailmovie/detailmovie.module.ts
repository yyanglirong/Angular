import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailmoviePageRoutingModule } from './detailmovie-routing.module';

import { DetailmoviePage } from './detailmovie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailmoviePageRoutingModule
  ],
  declarations: [DetailmoviePage]
})
export class DetailmoviePageModule {}
