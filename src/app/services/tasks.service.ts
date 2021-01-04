import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private featuredTasks: Task[];
  private tasks: Task[];
  
  constructor() {
    this.featuredTasks = JSON.parse(localStorage.getItem('featured')) || [];
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addTask(task: Task): void {
    task.id = this.tasks.length + 1;
    this.tasks = [task, ...this.tasks];
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addFeaturedTask(featuredTask: Task): void {
    this.featuredTasks = [featuredTask, ...this.featuredTasks];
    localStorage.setItem('featured', JSON.stringify(this.featuredTasks));
  }

  changeFeatured(data:{id: number, featured: boolean}): void {
    let taskSelected: Task;

    this.tasks.forEach(task => {
        if(task.id === data.id) {
          task.featured = data.featured;
          taskSelected = task;
        }
    });

    if(taskSelected.featured) {
      this.featuredTasks = [taskSelected, ...this.featuredTasks];
    } else  {
      this.featuredTasks = this.featuredTasks.filter(task => (task.id !== data.id));
    }
    
    localStorage.setItem('featured', JSON.stringify(this.featuredTasks));    
    localStorage.setItem('tasks', JSON.stringify(this.tasks));   

  }

  changeComplete(data:{id: number, complete: boolean}): void {
    let {id, complete} = data;
    complete = !complete
    
    this.featuredTasks = this.featuredTasks.map((t:Task) => { if(id === t.id) t.complete = complete; return t; });
    this.tasks = this.tasks.map((t:Task) => { if(id === t.id) t.complete = complete; return t; });
    
    localStorage.setItem('featured', JSON.stringify(this.featuredTasks));
    localStorage.setItem('tasks', JSON.stringify(this.tasks));   
  } 

  getTask(id: number): Task {
    const [task] = this.tasks.filter(task => task.id === id);
    return task;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getFeaturedTasks(): Task[] {
    return this.featuredTasks;
  }

  editTask(editedTask: Task): void {
    this.tasks = this.tasks.map(task => (task.id === editedTask.id) ? task = editedTask : task);
    this.featuredTasks = this.featuredTasks.map(task => (task.id === editedTask.id) ? task = editedTask : task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    localStorage.setItem('featured', JSON.stringify(this.featuredTasks));
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.featuredTasks = this.featuredTasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    localStorage.setItem('featured', JSON.stringify(this.featuredTasks));
  }

}
