import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { divGlobal } from './style';
//import ArrowKeysReact from 'arrow-keys-react';
import Navbar from '../headerCompo/'; 
import Game from '../game';
import Hall from '../hall';

/*
export const gp = ArrowKeysReact.config({
  left: () => {
   console.log('left', window.location.pathname)
  },
  right: () => {
    console.log('right', window.location.pathname)
  },
  up: () => {
    console.log('up', window.location.pathname)
  },
  down: () => {
    console.log('down', window.location.pathname)
  }
});
    <div  {...ArrowKeysReact.events} tabIndex="1" style={divGlobal}>

*/


const Global = () =>
  <Router>
    <div style={divGlobal}>
      <Game/>
    </div>
  </Router>

export default Global;
