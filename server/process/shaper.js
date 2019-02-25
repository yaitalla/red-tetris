const data = require('../public/data.js');

const fieldCreator = (field, shapes) => {
    let ret = field;
    for (let i=1; i<5; i++) {
        for(let j=3; j<7; j++) {
            if (shapes[0].shape[i-1][j-3] == 2) {
                if (ret[i][j+1] > 2) {
                    return {
                        type: 'GAME_OVER',
                        field: ret,
                        gameOver: true
                    }
                }
                ret[i][j+1] = shapes[0].shape[i-1][j-3]
            }
        }
    }
    return {
        type: 'START_GAME',
        field: ret,
        shapes: shapes,
        next: shapes[1],
        currentID: shapes[0].id,
        total: 1
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

const shaper = (data) => {
    const shape = [];
    for (let i=0; i<10; i++) {
        shape.push(randShape())
    }
    return fieldCreator(data.field, shape)
    console.log(shape)
    // if (data.next == null) {
    //     return(fieldCreator(data.field, shape));
    // } else {
    //     return (fieldCreator(data.field, data.next))
    // }
}

module.exports = shaper;