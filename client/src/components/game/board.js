import React from 'react';
import Row from './rows';
import {board} from './style';
import { connect } from 'react-redux';
import axios from 'axios';
import fill from '../../actions/fillGrid';

const api = axios.create({baseURL:"http://localhost:4000"});

const getTetris = () => {
   const ret = [];
   api.get("/api/game/play").then((data) => {
     fill(data.data)
    });
}

const Board = ({data}) =>
    <div style={board}>
          {getTetris()}

        {
          data.map((row, i) => <Row key={i} stat={row}/> )
        }
    </div>


  const mapStateToProps = (state) => ({
    data: state.field
  })


export default connect(mapStateToProps)(Board);