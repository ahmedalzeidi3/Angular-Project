import { Component } from '@angular/core';
import { AddwordComponent } from './addword/addword.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddwordComponent],
  template: `<h1>Hello world!</h1>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-do List';
  handleClick() {

    alert("Function Called")
  }
}
