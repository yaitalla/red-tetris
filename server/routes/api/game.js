 const express = require('express');
const router = express.Router();
const data = require('../../public/data.js');


router.get('/play', (req, res) => {
    const shapes = data.shapes; //list of string
	const currentRand = Math.floor(Math.random() * 7); //random number
    const shape = data.tetriminos[shapes[currentRand]];
    res.send(shape);

});


module.exports = router;