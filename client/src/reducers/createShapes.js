import constants from '../constants';
const { grid, block, tetriminos } = constants;

const isLineFull = (tetriminos, grid) => {
    const lines = [];
    const update = updateGrid(tetriminos, grid, 'temp');
    const location = localize(tetriminos);
    const rows = location.reduce((prev, cur) => {
        prev[cur.y] = prev[cur.y] ? prev[cur.y] + 1 : 1;
        return prev;
    }, []);
    for (const row in rows) {
        let check = true;
        for (let i=0; i<10; i++) {
            if (update[i][row] === 'empty') { check = false; } 
        }
        if (check) { lines.push(row)}
    }
    return lines;
}

const updateGrid = (tetriminos, grid, color) => {
    const update = grid.map((x) => [...x]);
    const location = localize(tetriminos);
    for (let i=0; i<location.length; i++) {
        const { x, y } = location[i];
        update[x][y] = color;
    }
}

const newGrid = (grid, tetriminos, color) => {
    const lineComplete = isLineFull(grid, tetriminos);
    const updatedGrid = updateGrid(grid, tetriminos, color);
    for (const row of lineComplete) {
        for (let i=0; i<10; i++) {
            updatedGrid[i][row] = 'empty';
        }
    }
    for (let row=lineComplete[0] - 1; row>=0; row--) {
        const gap = lineComplete.length;
        for(let i=0; i<10; i++) {
            updatedGrid[i][row + gap] = updatedGrid[i][row];
        }
    }
    return updatedGrid;
}

function createShape(state = grid, action) {
    switch (action.type) {
        case 'NEXT':
            return newGrid(state, action.current, action.color);
        case 'FIRST':
            return grid;
        default:
            return state;
    }
};

export default createShape;