import { Component } from '@angular/core';
import { ChecklistComponent } from './checklist/checklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChecklistComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
