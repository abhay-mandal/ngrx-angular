import { Component, OnInit } from '@angular/core';
import { Todo } from '../../core/models/todo';
import { Store } from '@ngrx/store';
import * as Todos from '../../core/store/todos/todos.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Array<Todo>;
  message: string;
  bgClass: string;
  p = 1;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new Todos.GetTodos());
    this.store.select('todos').subscribe(response => {
      this.todos = response.todoList;
      this.message = response.message;
      this.bgClass = response.infoClass;
    }, error => {
      console.log(error);
    });
  }

}
