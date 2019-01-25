
module.exports =  {
    tetriminos: {
		stick: {
			shape: [
				[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#e53259'
		},
		square: {
			shape: [
				[1, 1, 0, 0],
				[1, 1, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#00BCD4'
		},
		cross: {
			shape: [
				[0, 1, 0, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#2db754'
		},
		L: {
			shape: [
				[0, 0, 1, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#ef7e32'
		},
		mirrorL: {
			shape: [
				[1, 0, 0, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#ffd232'
		},
		snakeL: {
			shape: [
				[1, 1, 0, 0],
				[0, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#cd7cff'
		},
		snakeR: {
			shape: [
				[0, 1, 1, 0],
				[1, 1, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#d18162',
		}
	},
    gridHeight: 600,
    gridWidth: 260,
    shapes: [
        'L', 'mirrorL', 'snakeL', 'snakeR', 'cross', 'stick', 'square'
    ],
    block: 24
}