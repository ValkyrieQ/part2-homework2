import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @ViewChild('task') taskElement: ElementRef;

  tasks: string[] = [];
  newTask: string = '';

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    if (this.newTask !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
      this.taskElement.nativeElement.focus();
    }
  }

  deleteTask(taskIndex: number) {
    this.tasks = this.tasks.filter((item, index) => index !== taskIndex);
  }
}
