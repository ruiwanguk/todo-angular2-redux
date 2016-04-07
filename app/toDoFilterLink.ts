import {Component, Inject, OnInit, OnDestroy} from "angular2/core";
import {ToDoActions} from "./toDoActions";

@Component({
    selector: 'todo-filter',
    inputs: ['filter'],
    template: `
        <a href="#" (click)="applyFilter()" [ngClass]="{'active': active, 'inactive': !active}">
            <ng-content></ng-content>    
        </a>
    `
})
export class ToDoFilterLink implements OnInit, OnDestroy{

    private unsubscribe: Function;
    private active: boolean;
    private filter: string;

    constructor(@Inject('AppStore') private appStore: AppStore,
                private todoActions: ToDoActions) {
        this.unsubscribe = appStore.subscribe(() => {
            this.updateActive()
        })
    }

    private ngOnInit():void {
        this.updateActive();
    }

    private ngOnDestroy():void {
        this.unsubscribe();
    }

    private applyFilter() {
        this.appStore.dispatch(this.todoActions.setFilter(this.filter))
    }

    private updateActive() {
        this.active = (this.filter == this.appStore.getState().filter);
    }
}