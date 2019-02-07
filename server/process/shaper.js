const data = require('../public/data.js');

const mapDecoder = (field) => {
    for (let i=0; i<22; i++) {
        for(let j=0; j<12; j++) {
            if (field[i][j] == '0'){
                    field[i][j] = '';
            }
        }
    }
    return field
}

const fieldCreator = (field, shape, colors) => {
    let ret = field;
    const i = colors.length
    for (let i=1; i<5; i++) {
        for(let j=3; j<7; j++) {
            ret[i][j] = shape.shape[i-1][j-3]
        }
    }
    return {
        type: 'BRAND_NEW',
        field: ret,
        shape: shape.shape,
        colors: colors[i].push(shape.color),
        next: randShape()
    }
}

const randShape = () => {
    const shapes = data.shapes; //list of string
	const currentRand = Math.floor(Math.random() * 7); //random number
    const shape = data.tetriminos[shapes[currentRand]];
    
    return shape;
}

const shaper = ({field, colors}) => {
    const shape = randShape();
    return(fieldCreator(field, shape, colors));
}

module.exports = shaper;