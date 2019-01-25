import React from 'react';
import {rows, box} from './style';

const Row = ({stat}) =>
<div style={rows}>
    {
        stat.map((square, i) => <div key={i} style={box}>{square}</div>)
    }
</div>
  

  export default Row;