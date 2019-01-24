import React from 'react';
import { PropTypes } from 'prop-types';
import constants from '../../constants.js';

const tetriminoPLace = (shape) => {
    const place = [];
    for (let i = 0; i < shape.length; i++) {
		for (let j = 0; j < shape[i].length; j++) {
			if (shape[i][j]) {
				place.push({ x: j, y: i });
			}
		}
	}
	return place;
}

const tetrimino = ({X, Y, color}) => {

}

const Base = ({shape, X, Y, color}) => {
    const place = tetriminoPLace(shape);
    console.log('PLACE', place)
    return (
        <div>{shape}</div>
    );
}

Base.propTypes = {
    shape: PropTypes.array,
    X: PropTypes.number,
    Y: PropTypes.number,
    color: PropTypes.string
}

export default Base;