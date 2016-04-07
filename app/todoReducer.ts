
import {ToDoItem} from './toDoItem';
import * as ToDoActions from './toDoActions'

const initialStates = {
    todos: [],
    filter: ''
};

export function toDoReducer(state = initialStates, action) {
    switch (action.type) {
        case ToDoActions.ADD_TODO:
            return {
                todos: state.todos.concat({
                    id: action.id,
                    text: action.text,
                    completed: action.completed
                }),
                filter: state.filter
            };
        case ToDoActions.COMPLETE_TODO:
            return {
                todos: toggleToDo(state.todos, action),
                filter: state.filter
            };
        case ToDoActions.SET_FILTER:
            return {
                todos: state.todos,
                filter: action.filter
            };
        default:
            return state;

    }
}
function toggleToDo(todos:ToDoItem[], action) {
    return todos.map(todo => {
        if (todo.id !== action.id) {
            return todo;
        }

        return {
            id: todo.id,
            text: todo.text,
            completed: !todo.completed
        }
    })
}
