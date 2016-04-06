
import {Component, Inject, onDestory} from 'angular2/core';
import {ToDoItem} from './toDoItem'

@Component({
    selector: 'todo-list',
    template: `
        <ul>
            <li *ngFor = "#toDoItem of toDoItems">
                {{toDoItem.text}}
            </li>
        </ul>
    `
})
export class ToDoList implements OnDestory{
    toDoItems: ToDoItem[];

    constructor(@Inject('AppStore') private appStore: AppStore) {
        this.unsubscribe = this.appStore.subscribe(() => {
            let currentState = this.appStore.getState();
            this.toDoItems = currentState.todos;
        });
    }

    private ngOnDestory() {
        this.unsubscribe();
    }
}
