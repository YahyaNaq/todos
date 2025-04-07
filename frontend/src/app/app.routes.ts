import { Routes } from '@angular/router';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodoFormComponent } from './todos/components/todo-form/todo-form.component';
import { TodoFilterComponent } from './todos/components/todo-filter/todo-filter.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'todos/add',
    component: TodoFormComponent,
  },
  {
    path: 'todos/edit/:id',
    component: TodoFormComponent,
  },
  { path: '**', redirectTo: '' }
];
