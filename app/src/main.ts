import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {App} from './app';
import {createStore} from 'redux';
import {rootReducer} from './rootReducer';

const appStore = createStore(rootReducer);

bootstrap(App, [
    provide('AppStore', {useValue: appStore})
])
.catch(err => console.error(err));