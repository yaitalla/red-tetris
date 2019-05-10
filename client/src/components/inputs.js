import React from 'react';
import { connect } from 'react-redux';
import { shapeProvider } from '../config/misc/shapeProvider';
import store from '../config/store';
import move from '../actions/move';
import { REFRESH } from '../config/constants';

const keyboard = {
    37: 'left',
    38: 'rotate',
    39: 'right',
    40: 'down'
};
const boardKeys = Object.keys(keyboard).map(e => parseInt(e, 10));

const Inputs = (state) => {
    // console.log('inputs refresh', state.state)
    const keyDown = (e) => {
        console.log(e.metaKey, 'oui')
        const type = keyboard[e.keyCode];
        if (state.state.playing == false || boardKeys.indexOf(e.keyCode) === -1) {
          store.dispatch({type: REFRESH, nbr: state.state.nb+1})
          return null
        }
        // console.log(type, state.state)
        store.dispatch(move[type](state.state))
     };

  shapeProvider(state.state.shapeIndex, state.state.shapes, state.state.actualRoom)
  window.addEventListener('keydown', keyDown, {once: true});
  return null;
}

const mapStateToProps = (state) => {
    return {
        state: state,
        playing: state.playing
    }
}

export default connect(mapStateToProps)(Inputs)