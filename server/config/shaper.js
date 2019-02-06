const data = require('../public/data.js');

const fieldCreator = (data) => {
    //console.log(data)
    let shape = data;
    let ret = store.field;
    for (let i=0; i<4; i++) {
        for(let j=3; j<7; j++) {
            ret[i][j] = shape.shape[i][j-3]
        }
    }
    //console.log('ici', ret)
    return {
        type: 'BRAND_NEW',
        grid: ret,
        shape: shape.shape,
        color: shape.color
    }
}

const shaper = (data) => {
    const shapes = data.shapes; //list of string
	const currentRand = Math.floor(Math.random() * 7); //random number
    const shape = data.tetriminos[shapes[currentRand]];
    return(shape);
}

module.exports = shaper;