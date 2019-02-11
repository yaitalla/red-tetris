const data = require('../public/data.js');

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
        shape: shape,
        next: randShape(),
        currentID: shape.id,
        ground: false
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

const shaper = (data) => {
    //console.log(data)
    const shape = randShape();
    if (data.next == null) {
        return(fieldCreator(data.field, shape));
    } else {
        return (fieldCreator(data.field, data.next))
    }

   // console.log(field)
}

module.exports = shaper;