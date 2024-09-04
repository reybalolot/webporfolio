function make2dArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

let grid, cols, rows;
let boxSize = 20;
let alpha = 255;
let trail = 15;

function setup() {
    createCanvas(windowWidth, windowHeight);
    cols = ceil(width / boxSize);
    rows = ceil(height / boxSize);
    grid = make2dArray(cols, rows);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#272727');

    let x = floor(mouseX / boxSize);
    let y = floor(mouseY / boxSize);
    grid[x][y] = alpha

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j] > 0) {
                let x = i * boxSize;
                let y = j * boxSize;
                noFill()
                stroke(80, 95, 95, grid[i][j]);
                square(x, y, boxSize);
                // ellipse(x + boxSize / 2, y + boxSize / 2, boxSize * 2);
            }
        }
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j] > 0) {
                grid[i][j] -= trail;
            }
        }
    }
}
