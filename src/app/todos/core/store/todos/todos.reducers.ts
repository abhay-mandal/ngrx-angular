import { TodosActions, TodosActionType } from './todos.actions';

export const initialState = {
  todoList : [],
  message: '',
  infoClass: ''
};

export function todosReducer(state = initialState, action: TodosActions) {

  switch (action.type) {

    case TodosActionType.GET_TODOS: {
      return { ...state,
        message: 'Loading data',
        infoClass: 'bg-info'
      };
    }

    case TodosActionType.GET_TODOS_SUCCESS: {
      let msgText = '';
      let bgClass = '';

      if (action.payload.length < 1) {
        msgText = 'No data found';
        bgClass = 'bg-danger';
      } else {
        msgText = '';
        bgClass = '';
      }
      console.log('prev state', state);

      return {
        ...state,
        todoList: action.payload,
        message: msgText,
        infoClass: bgClass
      };
    }

    case TodosActionType.GET_TODOS_FAILED: {
      return { ...state };
    }

    case TodosActionType.ADD_TODO: {
      return {
        ...state,
        message: '',
        infoClass: ''
      };
    }

    case TodosActionType.ADD_TODO_SUCCESS: {
      return {
        ...state,
        todoList : [ action.payload, ...state.todoList],
        message: 'New todo added',
        infoClass: 'bg-success'
      };
    }

    case TodosActionType.GET_TODOS_FAILED: {
      return { ...state };
    }

    case TodosActionType.UPDATE_TODO: {
      return {
        ...state,
        message: '',
        infoClass: ''
      };
    }

    case TodosActionType.UPDATE_TODO_SUCCESS: {
      return {
        ...state,
        message: 'Update todo',
        infoClass: 'bg-success'
      };
    }

    case TodosActionType.UPDATE_TODO_FAILED: {
      return { ...state };
    }

    case TodosActionType.DELETE_TODO: {
      return {
        ...state,
        todoList : state['todoList'].filter((todo) => todo.id != action.payload),
        message: '',
        infoClass: ''
      };
    }

    case TodosActionType.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        message: 'Todo deleted',
        infoClass: 'bg-warning'
      };
    }

    case TodosActionType.DELETE_TODO_FAILED: {
      return { ...state };
    }

    default: {
      return state;
    }

  }

}
