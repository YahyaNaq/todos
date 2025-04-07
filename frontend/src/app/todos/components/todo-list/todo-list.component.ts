import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [NgIf, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  loading = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.loading = true;
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching todos:', err);
        this.loading = false;
      }
    });
  }
}
