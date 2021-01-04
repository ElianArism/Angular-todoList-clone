import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent implements OnInit {

  @Input() taskId: number;
  @Input() featured: boolean;
  @Input() pageFeatured: boolean;
  @Output() changeFeaturedEvent = new EventEmitter<{id: number, featured: boolean}>();
  @Output() editTaskEvent = new EventEmitter<number>();
  @Output() deleteTaskEvent = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit(): void {
    
  }

  editTask() {
    this.editTaskEvent.emit(this.taskId);
  }

  deleteTask() {
    this.deleteTaskEvent.emit(this.taskId);
  }

  changeFeatured(): void {
    this.featured = !this.featured;
    this.changeFeaturedEvent.emit({id: this.taskId, featured: this.featured});
  }

}
