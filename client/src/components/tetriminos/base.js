import React from 'react';
import PropTypes from 'prop-types';
import { Rect, Group } from 'react-konva';
import constants from '../../constants';
import actions from '../../actions';
import Test from '../game/tetrisTest';

import { Shape } from 'konva';
import { connect } from 'react-redux';

const { block } = constants;



const Shapes = (xs, ys, color) => {
    const shap = [];
    for (let i=0; i<xs.length; i++) {
    const shap = [];
        shap.push(<Rect key={i} width={block} height={block}
                            x={xs[i]} y={ys[i]} fill={color}
                            stroke="black" strokeWidth={4} /> );
    }
    console.log(shap)
    return shap;
}

const Tetrimino = ({ shape, X, Y, color }) => {
    console.log('Tetrimino', shape, X, Y)
    // const location = localization(shape.randTetris.shape);
    // const xs = location.map((coord) => (coord.x * block) + X);
    // const ys = location.map((coord) => (coord.y * block) + Y);
    //console.log('Tetrimino', location)
    return (
            <Test xs={X} ys={Y} color={color}/>
    );
}

const localization = (shape) => {
    const location = [];
    for (let i=0; i<shape.length; i++) {
        for (let j=0; j<shape[i].length; j++) {
            if (shape[i][j]) {
                location.push({ x: j, y: i})
            }
        }
    }
    return location;
}


Tetrimino.propTypes = {
	shape: PropTypes.string,
	X: PropTypes.number,
	Y: PropTypes.number,
    color: PropTypes.string,
};

export default Tetrimino;