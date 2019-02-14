import Global from "./components/global/";
import ReactDOM from "react-dom";
import React from 'react';
import store from './store';
import {down} from './actions/down';
import {left} from './actions/left';
import {right} from './actions/right';
import {SOCKET, SERVE_DOWN, SERVE_LEFT, SERVE_RIGHT,
DOWN_REQUEST, LEFT_REQUEST, RIGHT_REQUEST} from './constants';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

window.store = store.getState();
// console.log(window.store)
store.subscribe(() => {
  console.log('subscribe',store.getState().field, store.getState().currentID)
})
const broadcastKeysToServer = (field, id) => {
  console.log(field, id)
    const listener = (e) => {
    //  if (id != null) {
        switch(e.keyCode){
          case 40: //down arrow
            SOCKET.emit(DOWN_REQUEST, {field, key: e.keyCode, id})
            break;
          case 39: //right arrow
            SOCKET.emit(RIGHT_REQUEST, {field, key: e.keyCode, id})
            e.preventDefault();
            break;
          case 37: //left arrow
            SOCKET.emit(LEFT_REQUEST, {field, key: e.keyCode, id})
            e.preventDefault();
            break;
          default:
            break;
          }
    //  }
    }
    window.addEventListener('keydown', listener);
  }
  broadcastKeysToServer(store.getState().field, store.getState().currentID)
  const listen = () => {
    SOCKET.on(SERVE_DOWN, (data) => {
      console.log('move down', data)
      store.dispatch(data)    
    })
    SOCKET.on(SERVE_LEFT, (data) => {
      console.log('move left', data)
      store.dispatch(data)    
    })
    SOCKET.on(SERVE_RIGHT, (data) => {
      console.log('move right', data)
      store.dispatch(data)    
    })
  } 

  listen();


ReactDOM.render((
    <Router>
        <Provider store={store}>
            <Global/>
        </Provider>
    </Router>
), document.getElementById('tetris'));
