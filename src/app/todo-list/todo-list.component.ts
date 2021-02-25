import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Task } from '../model/task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @ViewChild('taskName') taskName: ElementRef;
  @ViewChildren(TaskComponent) taskComponentList: QueryList<TaskComponent>;

  newTask: Task;
  tasks: Task[];
  selectedTask: Task;

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

  showTaskDetail(taskComp: TaskComponent) {
    if (taskComp.isSelected) {
      taskComp.isSelected = false;
      this.selectedTask = null;
    } else {
      this.taskComponentList.forEach((taskComponent: TaskComponent) => {
        taskComponent.isSelected = false;
      });
      taskComp.isSelected = true;
      this.selectedTask = taskComp.taskItem;
    }
  }
}
