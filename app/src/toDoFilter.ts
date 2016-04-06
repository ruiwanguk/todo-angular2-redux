import {Component} from 'angular2/core';

@Component({
    selector: 'filters',
    template:
        `<div>
            <add-todo></add-todo>
            <todo-list></todo-list>
            <filters></filters>
        </div>`,
})
export class ToDoFilter { }
