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

const Row = ({stat, color}) => 
  <div style={rows}>
      {
          stat.map((square, i) =>
            square == '1' ? applyColor(color, i) :
                            applyColor("#f4f4f4", i)
          )
      }
  </div>

const shapeView = (data) => {
  return (
    <div>
      {
        data.shape.map((row, i) =>
          <Row key={i} color={data.color} stat={row}/>
        )
      }
    </div>
  )
}

const dataBoard = ({data}) =>
{
  return ( 
      <div style={board}>
        <h2>Next Shape</h2>
        {
          data.shape ? shapeView(data) : null
        }
      </div>
  )
}


  const mapStateToProps = (state) => ({
    data: state.next
  })




export default connect(mapStateToProps)(dataBoard);