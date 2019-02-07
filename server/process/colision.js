const checkDown = (field) => {
    for ( i=0; i<20; i++) {
        for( j=0; j<10; j++) {
            if (field[i][j] == '1'){
                field[i+1][j]
            }
        }
    }
    return false;
}

const checkForCollision = (direction, field) => {
    switch(direction){
        case "down":
            return checkDown(field);
        default:
            return false;
    }
};

module.exports = checkForCollision;