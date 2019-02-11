import React from 'react';
import {board, rows, box} from './style';
import { connect } from 'react-redux';


const applyColor = (color, mapKey) => {
  const setStyle = (color) => {
    return  {
      height: '24px',
      width: '24px',
      textAlign: 'center',
      background: color
    }
  }
  return (
    <div key={mapKey} style={setStyle(color)}>{''}</div>
  )
}

const Row = ({stat, color}) => {
  return (
    <div style={rows}>
    {
      stat.map((square, i) =>
        square == '2' ? applyColor(color, i) :
               applyColor("#f4f4f4", i)
      )
    }
    </div>
  )
}
  

const shapeView = (data, colors) => {
  return (
    <div>
      {
        data.shape.map((row, i) =>
          <Row key={i} color={colors[data.id]} stat={row}/>
        )
      }
    </div>
  )
}

const dataBoard = ({data, colors}) =>
{
return ( 
      <div style={board}>
        <h2>Next Shape</h2>
        {
          data.shape ? shapeView(data, colors) : null
        }
      </div>
  )
}


  const mapStateToProps = (state) => ({
    data: state.next,
    colors: state.colors
  })




export default connect(mapStateToProps)(dataBoard);