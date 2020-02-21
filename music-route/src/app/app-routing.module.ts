import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicComponent } from './components/music/music.component';
import { MvComponent } from './components/mv/mv.component';
import { DetailmusicComponent } from './components/detailmusic/detailmusic.component';
import { DetailmovieComponent } from './components/detailmovie/detailmovie.component';

const routes: Routes = [
  {
    path:'music',
    component:MusicComponent
  },
  {
    path:'mv',
    component:MvComponent
  },
  {
    path:'detailmusic',
    component:DetailmusicComponent
  },
  {
    path:'detailmovie/:id',
    component:DetailmovieComponent
  },
  {
    path:'',
    redirectTo:'music',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
