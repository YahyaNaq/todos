import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-todo-form',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgIf,
    NgFor
  ],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  todoId: number | null = null;
  categories: any[] = []; 

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private todoService: TodoService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      is_completed: [false],
      category: ['', [Validators.required]]
    });

    this.categoryService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });

    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.todoId = id;
        this.loadTodo(id);
      }
    });
  }

  loadTodo(id: number): void {
    this.todoService.getTodoById(id).subscribe(todo => {
      this.todoForm.patchValue(todo);
    });
  }

  onSubmit(): void {
    if (this.todoForm.invalid) return;

    const todo: Todo = this.todoForm.value;
    if (this.todoId) {
      this.todoService.updateTodo(this.todoId, todo).subscribe(() => {
        this.router.navigate(['/todos']);
      });
    } else {
      this.todoService.createTodo(todo).subscribe(() => {
        this.router.navigate(['/todos']);
      });
    }
  }

  onReset(): void {
    this.todoForm.reset();
  }
}
