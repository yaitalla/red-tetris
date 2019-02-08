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

const fieldCreator = (field, shape) => {
    let ret = field;
    for (let i=1; i<5; i++) {
        for(let j=3; j<7; j++) {
            ret[i][j+1] = shape.shape[i-1][j-3]
        }
    }
    return {
        type: 'BRAND_NEW',
        field: ret,
        shape: shape.shape,
        next: randShape(),
        currentID: shape.id,
    }
}

const randShape = () => {
    const shapes = data.shapes; //list of string
	const currentRand = Math.floor(Math.random() * 7); //random number
    const shape = data.tetriminos[shapes[currentRand]];
    
    return {
        shape: shape.shape,
        id: currentRand
    };
}

const shaper = ({field}) => {
   // console.log(field)
    const shape = randShape();
    return(fieldCreator(field, shape));
}

module.exports = shaper;