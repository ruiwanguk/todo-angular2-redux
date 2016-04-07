import {Component, Inject} from 'angular2/core';
import {ToDoActions} from './toDoActions';

@Component({
    selector: 'add-todo',
    template:`
        <input #toDoInput>
        <button (click)="addToDo(toDoInput)">Add todo</button>
    `
})
export class AddToDo {

    constructor(@Inject('AppStore') private appStore: AppStore,
                private todoActions: ToDoActions) {
    }

    addToDo(input) {
        let action = this.todoActions.addToDo(input.value);
        this.appStore.dispatch(action);
        input.value = '';
    }
}