import React from 'react'
import { connect } from 'react-redux'
import Pregame from './pregame';
import Game from './game';
import Inputs from './inputs';

const App = ({actualroom, playing}) => {
  return (
      <div>
      { playing == true ? <Inputs/> : null}
      {
          actualroom  ? <Game/> : <Pregame /> 
      }
      </div>
      
    )
}

const mapStateToProps = (state) => {
  return {
    actualroom: state.actualRoom,
    playing: state.playing
  }
}
export default connect(mapStateToProps, null)(App)
