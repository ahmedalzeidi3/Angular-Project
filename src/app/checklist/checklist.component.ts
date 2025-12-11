import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


interface Task {
  text: string;
  done: boolean;
  dueDate?: string;
}


@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent {


  tasks: Task[] = [
    { text: 'Coding homework 03', done: false },
    { text: 'Haircut', done: true }
  ];

  newTask: string = '';
  newTaskDueDate: string = '';
  randomTask: string = '';


  constructor() {
    this.sortTasks();
  }


  addTask() {
    const text = this.newTask.trim();
    if (!text) return;

    this.tasks.push({
      text,
      done: false,
      dueDate: this.newTaskDueDate
    });

    this.sortTasks();
    this.newTask = '';
    this.newTaskDueDate = '';
  } 
  
 async apiCallHandling() { const result = await fetch('https://dummyjson.com/todos/random');
  const data = await result.json();
  this.tasks.push
  ({ text: data.todo,
     done: false,
      dueDate: this.newTaskDueDate
     })
    }

  removeTask(index: number) {
     this.tasks.splice(index, 1); 
    }
  deleteAll() {
    this.tasks = [];
  }

  private sortTasks() {
    this.tasks.sort((a, b)=> {
      if (!a.dueDate && !b.dueDate) return 0;
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      const aTime = new Date(a.dueDate).getTime();
      const bTime = new Date(b.dueDate).getTime();
      return aTime - bTime;
    });
  }
  isDueSoon(task: Task):boolean {
    if (!task.dueDate) return false;

    const now = new Date();
    const due = new Date(task.dueDate);

    const diffMs = due.getTime() - now.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    return diffDays <= 1 && diffDays >= 0;
  }
}
