import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CityComponent } from './components/city/city.component';
import { CommingComponent } from './components/comming/comming.component';
import { NowComponent } from './components/now/now.component';
const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"comming",
        component:CommingComponent
      },
      {
        path:"now",
        component:NowComponent
      },
      {
        path:"",
        redirectTo:"comming",
        pathMatch:"full"
      }
    ],
  },
  {
    path:"city",
    component:CityComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
