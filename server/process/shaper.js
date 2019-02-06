const data = require('../public/data.js');

const mapDecoder = (field) => {
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
            if (field[i][j] == '0'){
                    field[i][j] = '';
            }
        }
    }
    return field
}

const fieldCreator = (field, shape) => {
    let ret = field;
    for (let i=0; i<4; i++) {
        for(let j=3; j<7; j++) {
            ret[i][j] = shape.shape[i][j-3]
        }
    }
    return {
        type: 'BRAND_NEW',
        field: mapDecoder(ret),
        shape: shape.shape,
        color: shape.color,
        next: randShape()
    }
}

const randShape = () => {
    const shapes = data.shapes; //list of string
	const currentRand = Math.floor(Math.random() * 7); //random number
    const shape = data.tetriminos[shapes[currentRand]];
    
    return shape;
}

const shaper = (field) => {
    const shape = randShape();
    return(fieldCreator(field, shape));
}

module.exports = shaper;