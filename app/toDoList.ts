
import  {Component, Inject, OnDestroy} from 'angular2/core';
import {ToDoItem} from './toDoItem'
import {ToDoItemFilterPipe} from "./toDoItemPipe";
import {ToDo} from "./toDo";

@Component({
    selector: 'todo-list',
    template: `
        <ul>
            <todo *ngFor = "#toDoItem of toDoItems | todoItemFilter: filter"
                  [completed] = "toDoItem.completed"
                  [id] = "toDoItem.id">
                {{toDoItem.text}}
            </todo>
        </ul>
    `,
    directives: [ToDo],
    pipes: [ToDoItemFilterPipe]
})
export class ToDoList implements OnDestroy{

    toDoItems: ToDoItem[];
    filter: string;
    unsubscribe: Function;

    constructor(@Inject('AppStore') private appStore: AppStore) {
        this.unsubscribe = this.appStore.subscribe(() => {
            console.log('todo updated');
            let state = this.appStore.getState();
            this.toDoItems = state.todos;
            this.filter = state.filter;
        });
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}
