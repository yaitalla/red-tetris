import React from 'react';
import { flex, noBullet, btn} from './style';
import {fill} from '../../actions/fillGrid';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const starter = () => {
    const io = store.socket;
    console.log(io)
    io.emit('SHAPE_REQUEST', {
        field: store.field
    });
    io.on('RECEIVE_REQUEST', (data) => {
        console.log('dataSocket', data)
    });
}

const Button = ({socket, data}) => {
    return (
        <div style={flex}>
            <ul style={noBullet}>
        <button onClick={() => fill(socket)} style={btn}> PLAY </button>
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => ({
    socket: state.socket
})

const mapDispatchToProps = (dispatch) => ({
    onclick: () => dispatch(fill(s))
});
/*

const mapDispatchToProps = (dispatch, ownProps) => ({
    onclick: (ownProps) => dispatch(fill(store.socket, ownProps.socket))
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     onclick: () => dispatch(fill(ownProps.socket))
// })

// const mapDispatchToProps = (dispatch) => ({
//     onclick: (dispatch) => dispatch(fill()) 
// })
*/

export default connect(mapStateToProps, {fill})(Button);