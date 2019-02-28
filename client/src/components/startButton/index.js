import React from 'react';
import { flex, noBullet, btn, nonstyle} from './style';
import {fill} from '../../actions/fillGrid';
import { connect } from 'react-redux';
import { START_GAME, SERVER_IO_URL, START_SENT } from '../../constants';

import socket from '../../socket';

const starter = (field, room) => {
    socket.emit(START_GAME, {field, room})
}

//<button onClick={() => starter(field, null, socket)} style={btn}>PLAY</button>

const Button = ({fill, field, id, actualRoom}) => {
    socket.once(START_SENT, (data) => {
      console.log(data)
      fill(data)
    })
    return (
        <div style={flex}>
            <ul style={noBullet}>
                <h2 >Room:    {actualRoom}</h2>
                {id == null ? <button onClick={() => starter(field, actualRoom)} style={btn}> PLAY </button>
                    : <div style={nonstyle}>Play with arrow keys: ◄ ▲ ► ▼</div>
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        field: state.field,
        id: state.currentID,
        actualRoom: state.actualRoom
    }
}


export default connect(mapStateToProps, { fill })(Button);