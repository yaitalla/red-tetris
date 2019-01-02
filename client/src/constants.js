const grid = [];

for (let i=0; i<15; i++) {
    grid.push([]);
}
for (let i=0; i<15; i++) {
    for(let j=0; j<25; j++) {
        grid[i].push('empty');
    }
}

export default {
    tetriminos: {
		stick: {
			shape: [
				[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'red'
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
			color: 'green'
		},
		mirrorL: {
			shape: [
				[0, 0, 1, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'orange'
		},
		L: {
			shape: [
				[1, 0, 0, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'yellow'
		},
		snakeL: {
			shape: [
				[1, 1, 0, 0],
				[0, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'purple'
		},
		snakeR: {
			shape: [
				[0, 1, 1, 0],
				[1, 1, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'brown',
		}
	},
    grid,
    gridHeight: 600,
    gridWidth: 300,
    shapes: [
        'L', 'mirrorL', 'snakeL', 'snakeR', 'cross', 'stick', 'square'
    ],
    block: 30
}