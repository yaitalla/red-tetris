import React, { PropTypes } from 'react';
import { Rect, Group } from 'react-konva';
import constants from '../../constants';
import { Shape } from 'konva';

const { block } = constants;

const tertriminoLocation = (shape) => {
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

const Shapes = (xs, ys, color) => {
    const shap = [];
    for (let i=0; i<xs.length; i++) {
    const shap = [];
        shap.push(<Rect key={i} width={block} height={block}
                            x={xs[i]} y={ys[i]} fill={color}
                            stroke="black" strokeWidth={4} /> );
    }
    return shap;
}

const Tetrimino = ({ shape, X, Y, color}) => {
    const location = tertriminoLocation(shape);
    const xs = location.map((coord) => (coord.x * block) + X);
    const ys = location.map((coord) => (coord.y * block) + Y);
    return (
        <Group>
            {Shapes(xs, ys, color)}
        </Group>
    )
}

Tetrimino.propTypes = {
    shape: PropTypes.array.isRequired,
    X: PropTypes.number.isRequired,
    Y: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

const mapStateToProps = ({ currentTetromino }) => ({
	shape: currentTetromino.shape,
	name: currentTetromino.name,
	color: currentTetromino.color,
	offsetX: currentTetromino.offsetX,
	offsetY: currentTetromino.offsetY,
});

export default connect(mapStateToProps)(Tetrimino);