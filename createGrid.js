const createGrid = (col, row) => {

    let grid = [];

    for (let i = 0; i < row; i++) {
        
        grid.push([]);

        for (let j = 0; j < col; j++) {
            grid[i].push("");
        }

    }

    return grid;

}

console.log(createGrid(5, 5));