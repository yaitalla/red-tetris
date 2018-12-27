import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { divGlobal } from './style';
import Navbar from '../headerCompo/';

const Global = () =>
  <Router>
    <div style={divGlobal}>
      <Navbar/>
    </div>
  </Router>

export default Global;
