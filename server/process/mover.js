const checkDown = (field, i, j) => {
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
            if (field[i][j] == '1' && j < 9){
                field[i][j] = '2';
            }
        }
    }
    return field
}

const gridMaker = () =>{
    const grid = []
    for (let i=0; i<22; i++) { //game height: 20 blocs
        grid.push([]);
    }
    for (let i=0; i<22; i++) {
        for(let j=0; j<12; j++) { //game width 10 blocs
            if (i==0 || j==0 || i==21 || j==11){
                grid[i].push('2');
            }
            else {
                grid[i].push('0');
            }
        }
    }
    return grid;
}

const moveRight = (field) => {
    const grid = gridMaker();
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
            if (field[i][j] == '1' && j < 9){
                grid[i][j+1] = '1';
            }
        }
    }
    return grid
}

const moveLeft = (field) => {
    const grid = gridMaker();
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
            if (field[i][j] == '1' && j > 0){
                grid[i][j-1] = '1';
            }
        }
    }
    return grid
}

const moveDown = (field) => {
    const grid = gridMaker();
    let i, j;
    for ( i=1; i<21; i++) {
        for( j=1; j<11; j++) {
            if (field[i][j] == '1' && i < 21){
                if (field[i+1][j] == '2'){
                    console.log('ground', i+1)
                    return checkDown(grid)
                 }
               grid[i+1][j] = '1'
            }
            
        }
    }
    return grid
}



const mover = (data) => {
    let ret = {};
    ret = data.key == 40 ? moveDown(data.field) : (
        data.key == 39 ? moveRight(data.field) : moveLeft(data.field)
    )
    return {
        type: 'MOVE',
        field: ret
    }
}

module.exports = mover;
