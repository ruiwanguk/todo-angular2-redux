import {Component} from 'angular2/core';
import {AddToDo} from './addToDo';
import {ToDoList} from './toDoList'
import {ToDoFilter} from './toDoFilter';

@Component({
    selector: 'root',
    template:
        `<div>
            <add-todo></add-todo>
            <todo-list></todo-list>
            <filters></filters>
        </div>`,
    directives: [AddToDo, ToDoList, ToDoFilter]
})
export class App { }
