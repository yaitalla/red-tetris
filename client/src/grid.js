const grid = [];

for (let i=0; i<22; i++) {
    grid.push([]);
}
for (let i=0; i<22; i++) {
    for(let j=0; j<12; j++) {
        if (i==0 || j==0 || i==21 || j==11){
            grid[i].push(1);
        }
        else {
            grid[i].push(0);
        }
    }
}
export default grid;