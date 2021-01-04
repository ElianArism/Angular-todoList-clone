import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-featured-tasks',
  templateUrl: './featured-tasks.component.html',
  styleUrls: ['./featured-tasks.component.css']
})
export class FeaturedTasksComponent implements OnInit {
  public featuredTasks: Task[];
  constructor(private _TasksService: TasksService) { }

  ngOnInit(): void {
    this.featuredTasks = this._TasksService.getFeaturedTasks();
  }

  deleteTask(id: number): void {
    this._TasksService.deleteTask(id);
    this.featuredTasks = this._TasksService.getFeaturedTasks();
  }

  changeFeatured(data:{id: number, featured: boolean}): void {
    this._TasksService.changeFeatured(data);
    this.featuredTasks = this._TasksService.getFeaturedTasks();
  }

  Complete(task: Task): void {
    const data = {'id': task.id, 'complete': task.complete}
    this._TasksService.changeComplete(data);
    this.featuredTasks = this._TasksService.getFeaturedTasks(); 
  }
}
