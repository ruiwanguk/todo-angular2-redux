
import {PipeTransform, Pipe} from "angular2/core";
import {ToDoItem} from "./toDoItem";
import {BaseException} from "angular2/src/facade/exceptions";
import {isPresent, isArray} from "angular2/src/facade/lang";

@Pipe({
   name: 'todoItemFilter'
})
export class ToDoItemFilterPipe implements PipeTransform {

    transform(todos:ToDoItem[], args:any[]):ToDoItem[] {
        if (args.length ==- 0) {
            throw new BaseException('Visible todos pipe requires one argument')
        }
        
        if (isPresent(todos) && !isArray(todos)) {
            throw new BaseException('Visible todo pipe requires an array as input')
        }
        
        return this.getVisibleToDos(todos, args[0]);
    }

    private getVisibleToDos(todos: ToDoItem[], filter: string) {
        switch (filter) {
            case 'SHOW_PENDING':
                return todos.filter((t) => !t.completed);
            case 'SHOW_COMPLETED':
                return todos.filter((t) => t.completed);
            case 'SHOW_ALL':
            default:
                return todos;
        }
    }
}