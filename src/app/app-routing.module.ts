import { Input, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesRoutingModule } from './pages/pages-routing.routes';

import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'}, 
  {path: '**', component: NotFoundComponent}, 
];

@NgModule({
  imports: [
    PagesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
