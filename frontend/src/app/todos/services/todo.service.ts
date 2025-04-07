import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { BACKEND_API } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  http = inject(HttpClient);

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${BACKEND_API}/todos/`);
  }
}
