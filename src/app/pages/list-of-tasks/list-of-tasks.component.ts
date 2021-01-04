import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task.interface';
import { ThemeService } from '../../services/theme.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.css']
})
export class ListOfTasksComponent implements OnInit {
  private obsDarkMode$: Observable<boolean>;
  public tasks: Task[];
  public taskForm = this.fb.group({
    title: ['', [Validators.required]],
    body: ['', [Validators.required]]
  });
  public taskSelectedToEdit: Task =  null;
  public darkMode: boolean;

  constructor(private fb: FormBuilder, private _TasksService: TasksService, private _ThemeService: ThemeService) {}
  
  ngOnInit(): void {
    this.tasks = this._TasksService.getTasks();    
    this.obsDarkMode$ = this._ThemeService.theme;
    this.obsDarkMode$.subscribe(res => this.darkMode = res);
  }

  addTask() {
    if(this.taskSelectedToEdit) {
      const {id, complete, featured} = this.taskSelectedToEdit;
      const task: Task = {...this.taskForm.value, id, complete, featured};
      this._TasksService.editTask(task);
    } else {
      const task: Task = {...this.taskForm.value, id: 0, complete: false, featured: false};
      this._TasksService.addTask(task); 
    }
    this.taskForm.setValue({'title': '', 'body':''});
    this.tasks = this._TasksService.getTasks();
  }

  editTask(id: number) {
    this.taskSelectedToEdit = this._TasksService.getTask(id);
  
    this.taskForm.get('title').setValue(this.taskSelectedToEdit.title);
    this.taskForm.get('body').setValue(this.taskSelectedToEdit.body);
    
  }

  deleteTask(id: number) {
    this._TasksService.deleteTask(id);
    this.tasks = this._TasksService.getTasks();
  }

  changeFeatured(data:{id: number, featured: boolean}) {
    this._TasksService.changeFeatured(data);
    this.tasks = this._TasksService.getTasks();
  }

  Complete(task: Task): void {
    const data = {'id': task.id, 'complete': task.complete}
    this._TasksService.changeComplete(data);
    this.tasks = this._TasksService.getTasks(); 
  }

}
