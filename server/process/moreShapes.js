const data = require('../public/data.js');

const shapesGenerator = (field, shapes) => {
    let ret = field;
    for (let i=1; i<5; i++) {
        for(let j=3; j<7; j++) {
            if (shapes[0].shape[i-1][j-3] == 2) {
                ret[i][j+1] = shapes[0].shape[i-1][j-3]
            }
        }
    }
    return {
        type: 'MORE_SHAPES',
        field: ret,
        shapes: shapes,
        next: shapes[11],
        currentID: shapes[10].id,
    }
}


const randShape = () => {
    const shapes = data.shapes; //list of string
	const currentRand = Math.floor(Math.random() * 7); //random number
    const shape = data.tetriminos[shapes[currentRand]];
    return {
        shape: shape.shape,
        id: currentRand,
        leftCorner: {
            y: 1,
            x: 4
        }
    };
}

const moreShapes = (field, shapes) => {
    for (let i=0; i<10; i++) {
        shapes.push(randShape())
    }
    console.log(shapes.length)
    return shapesGenerator(field, shapes)
}

module.exports = moreShapes;