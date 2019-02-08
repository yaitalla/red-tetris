import{ BOARD_WIDTH, BOARD_HEIGHT} from './constants';
const grid = [];

for (let i=0; i<BOARD_HEIGHT+2; i++) {
    grid.push([]);
}
for (let i=0; i<BOARD_HEIGHT+2; i++) {
    for(let j=0; j<BOARD_WIDTH+2; j++) {
        if (i==0 || j==0 || i==21 || j==11){
            grid[i].push(1);
        }
        else {
            grid[i].push(0);
        }
    }
}
export default grid;