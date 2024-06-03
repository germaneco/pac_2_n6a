import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { FormsModule } from '@angular/forms';

interface Item {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  searchField: string = '';

  constructor(private todosService: TodosService) {}

  randomMethod() {
    this.todosService.todosById(this.searchField).subscribe((response) => {
      console.log('response', response.token);
    });
  };

  getTodos() {
    this.todosService.todos().subscribe((response) => {
      console.log('response', response);
    })
  }
}

