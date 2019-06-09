import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodolistComponent} from './components/todolist/todolist.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {path:"",component:TodolistComponent},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
