const gridMaker = () =>{
    const grid = []
    for (let i=0; i<20; i++) { //game height: 20 blocs
        grid.push([]);
    }
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) { //game width 10 blocs
            grid[i].push('');
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
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
            if (field[i][j] == '1' && i < 19){
                grid[i+1][j] = '1';
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
