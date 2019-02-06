import Global from "./components/global/";
import ReactDOM from "react-dom";
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

window.store = store.getState();
console.log(window.store)
// store.subscribe(() => {
//     console.log('subscribe',store.getState())
// })

ReactDOM.render((
    <Router>
        <Provider store={store}>
            <Global/>
        </Provider>
    </Router>
), document.getElementById('tetris'));
