import React from 'react';
import { flex, noBullet, btn} from './style';
import {fill} from '../../actions/fillGrid';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const Button = ({onclick, data}) => {
    return (
        <div style={flex}>
            <ul style={noBullet}>
        <button onClick={onclick} style={btn}> PLAY </button>
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => ({
    data: state.field
})

const mapDispatchToProps = (dispatch) => ({
    onclick: () => dispatch(fill(store.socket))
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

export default connect(mapStateToProps, mapDispatchToProps)(Button);