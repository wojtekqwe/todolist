import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lista zadań';
  taskName = '';
  config: { [key: string]: string } | null = null;
  tasks: Task[] = [
    {
      name: 'Zrobienie zakupów',
      done: false,
    },
    {
      name: 'Sprzątanie pokoju',
      done: false,
    },
    {
      name: 'Mycie samochodu',
      done: false,
    },
    {
      name: 'Nauka',
      done: false,
    },
  ];

  constructor() {}

  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((e) => e !== task);
  }
}
