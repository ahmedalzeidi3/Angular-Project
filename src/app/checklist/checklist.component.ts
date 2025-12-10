import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task {
  text: string;
  done: boolean;
  dueDate?: string;
}

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  addTask() {
    const text = this.newTask.trim();
    if (!text) return;

    this.tasks.push({
      text,
      done: false,
      dueDate: this.newTaskDueDate
    });

    this.newTask = '';
    this.newTaskDueDate = '';
  }

  removeTask(index: number) {
     this.tasks.splice(index, 1); 
    }
  deleteAll() {
    this.tasks = [];
  }
}
