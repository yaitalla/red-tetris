export const checkBelow = (field) => {
    let i, j;
    for ( i=0; i<22; i++) {
        for( j=0; j<12; j++) {
            if (field[i][j] == 2){
                if (field[i+1][j] == 1 || field[i+1][j] > 2) {
                    return false;
                }
            }
        }
    }
    return true;
}