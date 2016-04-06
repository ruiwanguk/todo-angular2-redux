
export const ADD_TODO = 'ADD_TODO';

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
}
