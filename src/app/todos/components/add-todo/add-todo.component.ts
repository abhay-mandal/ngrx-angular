import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as Todos from '../../core/store/todos/todos.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  closeResult: string;

  todoFormGroup = new FormGroup({
    title: new FormControl(''),
    // todoDescription: new FormControl(''),
    userId : new FormControl(1),
    completed : new FormControl(true)
  });

  constructor(
    private modalService: NgbModal,
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  addTodo(todoForm: NgForm) {
    this.modalService.dismissAll('close');
    this.store.dispatch(new Todos.AddTodo(todoForm.value));
    this.todoFormGroup.reset();
  }

}
