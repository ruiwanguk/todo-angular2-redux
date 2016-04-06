
import {ToDoItem} from './toDoItem';
import * as ToDoActions from './toDoActions'

const initialStates = {
    todos: []
};

export function toDoReducer(state = initialStates, action) {
    switch (action.type) {
        case ToDoActions.ADD_TODO:
            return {
                todos: state.todos.concat({
                    id: action.id,
                    text: action.text,
                    completed: action.completed
                })
            };
        default:
            return state;

    }
}