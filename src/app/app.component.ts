import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskName = '';
  config: { [key: string]: string } | null = null;
  tasks: Task[] = [
    {
      name: 'Siatkówka',
      done: false,
    },
    {
      name: 'Sprzątanie',
      done: false,
    },
    {
      name: 'Mycie samochodu',
      done: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: 'Lista zadań zbudowana w Angularze',
        date: new Date().toDateString(),
      };
    }, 500);
  }

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
