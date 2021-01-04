import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { ListOfTasksComponent } from './list-of-tasks/list-of-tasks.component';
import { PagesRoutingModule } from './pages-routing.routes';
import { FeaturedTasksComponent } from './featured-tasks/featured-tasks.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListOfTasksComponent,
    FeaturedTasksComponent
  ],
  exports: [
    ListOfTasksComponent,
    FeaturedTasksComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ], 
})

export class PagesModule { }
