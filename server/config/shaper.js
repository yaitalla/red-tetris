const data = require('../public/data.js');


const shaper = () => {
    const shapes = data.shapes; //list of string
	const currentRand = Math.floor(Math.random() * 7); //random number
    const shape = data.tetriminos[shapes[currentRand]];
    return(shape);
}

module.exports = shaper;