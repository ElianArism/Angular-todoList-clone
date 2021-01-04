import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfTasksComponent } from './list-of-tasks/list-of-tasks.component';
import { FeaturedTasksComponent } from './featured-tasks/featured-tasks.component';

const routes: Routes = [
    {path: 'list', pathMatch: 'full', component: ListOfTasksComponent},
    {path: 'featured', pathMatch: 'full', component: FeaturedTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
