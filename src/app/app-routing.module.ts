import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroesComponent} from './heroes/heroes.component';
const routes: Routes = [
  {
    path : '',
    component : DashboardComponent
  },
  {
    path : 'details/:id',
    component : HeroDetailComponent
  },
  {
    path : 'search/:id',
    component : HeroSearchComponent
  },
  {
    path : 'heroes',
    component : HeroesComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
