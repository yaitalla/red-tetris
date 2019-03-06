import {add} from './addShape';
import {checkBelow} from './chekBelow';

const gridMaker = (field) =>{
    const grid = []
    for (let i=0; i<22; i++) { //game height: 20 blocs
        grid.push([]);
    }
    for (let i=0; i<22; i++) {
        for(let j=0; j<12; j++) { //game width 10 blocs
            if (i==0 || j==0 || i==21 || j==11){
                grid[i].push(1);
            }
            else if (field[i][j] > 2) {
                grid[i].push(field[i][j]);
            }
            else {
                grid[i].push(0);
            }
        }
    }
    return grid;
}

const touchDown = (field, id, shapes, index, room) => {
    let i, j;
    for ( i=0; i<22; i++) {
        for( j=0; j<12; j++) {
            if (field[i][j] == 2){
                field[i][j] = id+3;
            }
        }
    }
    return add(field, shapes, index, room);
}

const moveDown = (field, id, shapes, index, room) => {
    const grid = gridMaker(field)
    let i, j, x = 0;
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
                if (!checkBelow(field)){
                    return touchDown(field, id, shapes, index, room)
                } else {
                    grid[i+1][j] = 2;
                    
                }
            }
        }
    }
    shapes[index].leftCorner.y++
    return {
        type: 'DOWN',
        field: grid,
        grounded: false,
        shapes: shapes
    }
}

export const down = (field, id, shapes, index, room) => {
    return moveDown(field, id, shapes, index, room)
}