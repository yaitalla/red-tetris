import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { divGlobal } from './style';
import ArrowKeysReact from 'arrow-keys-react';
import Navbar from '../headerCompo/'; 
import Game from '../game';
import Hall from '../hall';


const Global = () =>
  <Router>
    <div  style={divGlobal}>
      <Game/>
    </div>
  </Router>

export default Global;
