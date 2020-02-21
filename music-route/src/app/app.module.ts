import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './components/music/music.component';
import { MvComponent } from './components/mv/mv.component';
import { DetailmusicComponent } from './components/detailmusic/detailmusic.component';
import { DetailmovieComponent } from './components/detailmovie/detailmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    MvComponent,
    DetailmusicComponent,
    DetailmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
