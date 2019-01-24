import React from 'react';
import {rows, box} from './style';

const Row = ({stat}) =>
<div style={rows}>
    <div style={box}>{stat[0]}</div>
    <div style={box}>{stat[0]}</div>
    <div style={box}>{stat[0]}</div>
    <div style={box}>{stat[0]}</div>
    <div style={box}>{stat[0]}</div>
    <div style={box}>{stat[0]}</div>
    <div style={box}>{stat[0]}</div>
    <div style={box}>{stat[0]}</div>
    <div style={box}>{stat[0]}</div>
    <div style={box}>{stat[0]}</div>
</div>
  

  export default Row;