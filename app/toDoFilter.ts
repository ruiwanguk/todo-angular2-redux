import {Component} from "angular2/core";
import {ToDoFilterLink} from "./toDoFilterLink";

@Component({
    selector: 'filters',
    template:
        `<div>
            Select filter:
            <todo-filter filter="SHOW_ALL">All</todo-filter>,
            <todo-filter filter="SHOW_COMPLETED">Completed</todo-filter>,
            <todo-filter filter="SHOW_PENDING">Pending</todo-filter>
        </div>`,
    directives: [ToDoFilterLink]
})
export class ToDoFilter {
}
