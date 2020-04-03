import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { StoreModule, ActionReducer } from '@ngrx/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { todosReducer } from './core/store/todos/todos.reducers';
import { TodosEffects } from './core/store/todos/todos.effects';
import { TodosService } from './core/services/todos/todos.service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [TodoListComponent, TodoComponent, AddTodoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TodosEffects])
  ],
  exports: [TodoListComponent, TodoComponent, AddTodoComponent],
  providers: [TodosService]
})
export class TodosModule { }
