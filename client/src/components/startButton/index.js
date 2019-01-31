import React from 'react';
import { flex, noBullet, btn} from './style';
import fill from '../../actions/fillGrid';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const Button = ({onclick}) => {
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
    onclick: () => dispatch({ type: 'BRAND_NEW' })
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     onclick: () => dispatch(fill(ownProps.newField))
// })

//const mapDispatchToProps = dispatch => bindActionCreators({ fill() }, dispatch);


export default connect(null, mapDispatchToProps)(Button);