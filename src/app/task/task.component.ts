import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() taskItem: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() selectTask: EventEmitter<TaskComponent> = new EventEmitter();

  isSelected: boolean;

  constructor() {}

  ngOnInit(): void {}

  delete() {
    this.deleteTask.emit(this.taskItem);
  }

  showDetail() {
    this.selectTask.emit(this);
  }
}
