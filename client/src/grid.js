const grid = [];

for (let i=0; i<20; i++) {
    grid.push([]);
}
for (let i=0; i<20; i++) {
    for(let j=0; j<10; j++) {
        grid[i].push('');
    }
}

export default grid;