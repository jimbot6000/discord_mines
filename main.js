const width = 10;
const height = 10;
const mines = 20;
const areasToLook = [
    {x: 0, y: 1},
    {x: 1, y: 1},
    {x: 1, y: 0},
    {x: 1, y: -1},
    {x: 0, y: -1},
    {x: -1, y: -1},
    {x: -1, y: 0},
    {x: -1, y: 1}
];

let grid = [[]];
let minesLeft = mines;
let spacesLeft = width * height;
for (var i = 0; i < height; i++) {
    grid.push([]);
    for (var j = 0; j < width; j++) {
        if (Math.random() < (minesLeft / spacesLeft)) {
            grid[i].push(-1);
            minesLeft--;
        } else {
            grid[i].push(0);
        }
        spacesLeft--;
    }
}

for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
        if (grid[i][j] != -1) {
            let nearby = 0;
            areasToLook.forEach(val => {
                let x = j + val.x;
                let y = i + val.y;
                if(x >= 0 && y >= 0 && x < width && y < height) {
                    if(grid[y][x] == -1) {
                        nearby++;
                    }
                }
            });
            grid[i][j] = nearby;
        }
    }
}

for (var i = 0; i < height; i++) {
    let line = '';
    for (var j = 0; j < width; j++) {
        if (grid[i][j] == -1) {
            line += '!';
        } else {
            line += grid[i][j];
        }
    }
    console.log(line);
}