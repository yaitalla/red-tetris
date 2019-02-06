import{ BOARD_WIDTH, BOARD_HEIGHT} from './constants';
const grid = [];

for (let i=0; i<BOARD_HEIGHT; i++) {
    grid.push([]);
}
for (let i=0; i<BOARD_HEIGHT; i++) {
    for(let j=0; j<BOARD_WIDTH; j++) {
        grid[i].push('');
    }
}
export default grid;