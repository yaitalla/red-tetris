import React from 'react';
import PropTypes from 'prop-types';
import constants from '../../constants';
import MirrorL from '../tetriminos/mirrorL';
import L from '../tetriminos/L';
import Square from '../tetriminos/square';
import Stick from '../tetriminos/stick';
import SnakeR from '../tetriminos/snakeR';
import SnakeL from '../tetriminos/snakeL';
import Cross from '../tetriminos/cross';


const Tetrimino = ({ data }) => {
    console.log('data.data',data.data)
    switch(data.data.shape){
        case "L":
            return <L data={data.data}/>;
        case "mirrorL":
            return <MirrorL data={data.data}/>;
        case "stick":
            return <Stick data={data.data}/>;
        case "square":
            return <Square data={data.data}/>;
        case "snakeR":
            return <SnakeR data={data.data}/>;
        case "snakeL":
            return <SnakeL data={data.data}/>;
        case "cross":
            return <Cross data={data.data}/>;
        default:
            return;
    }
}

Tetrimino.propTypes = {
	data: PropTypes.object
};

export default Tetrimino;