import Global from "./components/global/";
import ReactDOM from "react-dom";
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

window.store = store;
console.log(store.getState())
store.subscribe(() => {
    console.log('subscribe triggered')
})
ReactDOM.render((
    <Provider store={store}>
        <Global/>
    </Provider>
), document.getElementById('tetris'));
