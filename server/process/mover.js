
const gridMaker = () =>{
    const grid = []
    for (let i=0; i<22; i++) { //game height: 20 blocs
        grid.push([]);
    }
    for (let i=0; i<22; i++) {
        for(let j=0; j<12; j++) { //game width 10 blocs
            if (i==0 || j==0 || i==21 || j==11){
                grid[i].push(1);
            }
            else {
                grid[i].push(0);
            }
        }
    }
    return grid;
}

const moveRight = (field) => {
    const grid = gridMaker();
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
            if (field[i][j] == 1 && j < 9){
                grid[i][j+1] = 1;
            }
        }
    }
    return grid
}

const moveLeft = (field) => {
    const grid = gridMaker();
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
            if (field[i][j] == 1 && j > 0){
                grid[i][j-1] = 1;
            }
        }
    }
    return grid
}
const finish = (field, id) => {
    const grid = gridMaker();
    let i, j;
    for ( i=1; i<21; i++) {
        for( j=1; j<11; j++) {
            if (field[i][j] == 2){
               grid[i][j] = id+3;
            }
            
        }
    }
   // console.log('finish', grid)
    return {
        field: grid,
        grounded: true
    }
}
const moveDown = (field, id) => {
    const grid = gridMaker();
    let i, j;
    for ( i=1; i<21; i++) {
        for( j=1; j<11; j++) {
            if (field[i][j] == 2 && i < 21){
                if (field[i+1][j] > 2
                    || field[i+1][j] == 1){
                    return finish(grid, id);
                 }
               grid[i+1][j] = 2;
            }
        }
    }
    return {
        field: grid,
        grounded: false
    }
}



const mover = (data) => {
   // console.log(data)
    let ret = {};
    ret = data.key == 40 ? moveDown(data.field, data.id) : (
        data.key == 39 ? moveRight(data.field) : moveLeft(data.field)
    )
    return {
        type: 'MOVE',
        field: ret.field,
        grounded: ret.grounded
    }
}

module.exports = mover;
