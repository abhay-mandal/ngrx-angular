import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, from } from 'rxjs';
import { Todo } from '../../models/todo';
import { headers } from '../../headers/headers';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.TODO_BASE_URL;
  }

  getAPITodos() {
    return this.http.get(`${this.baseUrl}/todos`)
      .pipe(catchError((error: any) => throwError(error.message)));
  }

  addAPITodo(todo: Todo) {
    const sendTodo = {
      'title': todo.title,
      'userId': todo.userId,
      'completed': todo.completed
    };

    return this.http.post(
      `${this.baseUrl}/todos`,
      JSON.stringify(sendTodo),
      { headers }
    )
      .pipe(catchError((error: any) => throwError(error.message)));
  }

  updateAPITodo(todo: Todo) {
    return this.http.put(
      `${this.baseUrl}/todos/${todo.id}`,
      JSON.stringify(todo),
      { headers }
    )
      .pipe(catchError((error: any) => throwError(error.message)));

  }

  deleteAPITodo(todoId: number) {
    return this.http.delete(
      `${this.baseUrl}/todos/${todoId}`,
      { headers }
    )
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}
