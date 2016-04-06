///<reference path="../typings/browser/ambient/redux/redux.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {provide} from "angular2/core";
import {App} from './app';
import createStore = Redux.createStore;
import {toDoReducer} from './todoReducer';
import {ToDoActions} from './toDoActions'

const store = createStore(toDoReducer);

bootstrap(App, [
    provide('AppStore', {useValue: store}),
    ToDoActions
]).catch(err => console.error(err));