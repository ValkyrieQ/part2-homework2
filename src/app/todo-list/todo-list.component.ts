import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @ViewChild('taskName') taskName: ElementRef;

  newTask: Task;
  tasks: Task[];

  constructor() {
    this.tasks = [];
    this.newTask = new Task();
  }

  ngOnInit(): void {}

  addTask() {
    this.newTask.id = this.tasks.length
      ? this.tasks.reduce((prev, cur) =>
          prev && cur.id > prev.id ? cur : prev
        ).id + 1
      : 0;
    this.tasks.push(this.newTask);
    this.clear();
  }

  clear() {
    this.newTask = new Task();
    this.taskName.nativeElement.focus();
  }

  deleteTask(taskItem: Task) {
    this.tasks = this.tasks.filter((task) => task !== taskItem);
    this.taskName.nativeElement.focus();
  }
}
