import React from 'react';
import Row from './rows';
import {board} from './style';
import { connect } from 'react-redux';



const Board = ({data}) =>
    <div style={board}>
        <Row stat={data[0]} />
        <Row stat={data[1]}/>
        <Row stat={data[2]}/>
        <Row stat={data[3]}/>
        <Row stat={data[4]}/>
        <Row stat={data[5]}/>
        <Row stat={data[6]}/>
        <Row stat={data[7]}/>
        <Row stat={data[8]}/>
        <Row stat={data[9]}/>
        <Row stat={data[10]}/>
        <Row stat={data[11]}/>
        <Row stat={data[12]}/>
        <Row stat={data[13]}/>
        <Row stat={data[14]}/>
        <Row stat={data[15]}/>
        <Row stat={data[16]}/>
        <Row stat={data[17]}/>
        <Row stat={data[18]}/>
        <Row stat={data[19]}/>
    </div>
  
  const mapStateToProps = (state) => ({
    data: state.start
  })

export default connect(mapStateToProps)(Board);