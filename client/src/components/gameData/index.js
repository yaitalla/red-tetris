import React from 'react';
import {board, rows, controls, gameover, center} from './style';
import { connect } from 'react-redux';
import game from '../../reducers';


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
    <div>
      <div style={rows}>
        {
          stat.map((square, i) =>
            square == '2' ? applyColor(color, i) :
                  applyColor("#f4f4f4", i)
          )
        }
      </div>
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

const dataBoard = ({gameOver, data, colors}) =>
{
  if (gameOver == true) {
    return (
      <div style={gameover}>
        <h1>Game Over</h1>
      </div>  
    )
  }
    return ( 
          <div style={board}>
            <h2 style={center}>Next Shape</h2>
              {
                data.shape ? shapeView(data, colors) : null
              }
          </div>
    )
}


  const mapStateToProps = (state) => ({
    data: state.next,
    colors: state.colors,
    gameOver: state.gameOver
  })




export default connect(mapStateToProps)(dataBoard);