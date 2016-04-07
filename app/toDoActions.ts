
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_FILTER = 'SET_FILTER';

export class ToDoActions {

    idCounter: number = 0;

    addToDo(text: string) {
        return {
            type: ADD_TODO,
            id: this.idCounter++,
            text: text,
            completed: false
        }
    }

    completeToDo(id: number) {
        return {
            type: COMPLETE_TODO,
            id: id
        }
    }

    setFilter(filter: string) {
        return {
            type: SET_FILTER,
            filter: filter
        }
    }
}
