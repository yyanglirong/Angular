import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./views/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'detailmovie/:id',
    loadChildren: () => import('./views/detailmovie/detailmovie.module').then( m => m.DetailmoviePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
