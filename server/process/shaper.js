const data = require('../public/data.js');

const fieldCreator = (field, shape) => {
    let ret = field;
    for (let i=1; i<5; i++) {
        for(let j=3; j<7; j++) {
            if (shape.shape[i-1][j-3] == 2) {
                if (ret[i][j+1] > 2) {
                    return {
                        type: 'GAME_OVER',
                        field: ret,
                        gameOver: true
                    }
                }
                //console.log(i, j+1)
                ret[i][j+1] = shape.shape[i-1][j-3]
            }
        }
    }
   // console.log(ret)
    return {
        type: 'BRAND_NEW',
        field: ret,
        shape: shape,
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
        id: currentRand,
        leftCorner: {
            y: 1,
            x: 4
        }
    };
}

const shaper = (data) => {
    //  console.log(data)
    const shape = randShape();
    if (data.next == null) {
        return(fieldCreator(data.field, shape));
    } else {
        return (fieldCreator(data.field, data.next))
    }
}

module.exports = shaper;