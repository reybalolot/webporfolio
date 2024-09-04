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
let boxSize = 10;
let alpha = 255;

function setup() {
    createCanvas(windowWidth, windowHeight);
    cols = ceil(width / boxSize);
    rows = ceil(height / boxSize);
    grid = make2dArray(cols, rows);

}

function mouseDragged() {
    // console.log(mouseX)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// function withinCols(i) {
//     return i >= 0 && i <= cols - 1;
// }

// function withinRows(j) {
//     return j >= 0 && i <= rows - 1;
// }

function draw() {
    background('#272727');

    let x = floor(mouseX / boxSize);
    let y = floor(mouseY / boxSize);
    grid[x][y] = 1000

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j] > 0) {
                let x = i * boxSize;
                let y = j * boxSize;
                noFill()
                stroke(80, 95, 95, alpha);
                square(x, y, boxSize);
                if (alpha > 0) {
                    alpha -= .5;
                    grid[i][j] = 0;
                }

            }
        }
    }
}
