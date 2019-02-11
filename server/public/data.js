
module.exports =  {
    tetriminos: {
		stick: {
			shape: [
				[2, 2, 2, 2],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#fff6b6'
		},
		square: {
			shape: [
				[2, 2, 0, 0],
				[2, 2, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#f4cfb2'
		},
		cross: {
			shape: [
				[0, 2, 0, 0],
				[2, 2, 2, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#ffcccc'
		},
		L: {
			shape: [
				[0, 0, 2, 0],
				[2, 2, 2, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#d9c2f0'
		},
		mirrorL: {
			shape: [
				[2, 0, 0, 0],
				[2, 2, 2, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#ffd232'
		},
		snakeL: {
			shape: [
				[2, 2, 0, 0],
				[0, 2, 2, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: '#b5e8f7'
		},
		snakeR: {
			shape: [
				[0, 2, 2, 0],
				[2, 2, 0, 0],
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