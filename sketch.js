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
let boxSize = 25;//20
let alpha = 255;
let trail = 5;
let focusDelay = trail + 2

function setup() {
    createCanvas(windowWidth, windowHeight);
    cols = ceil(width / boxSize);
    rows = ceil(height / boxSize);
    grid = make2dArray(cols, rows);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    // mouseTrail();
}

function draw() {
    background('#272727');
    // mouseTrail();
}

function mouseTrail() {
    let x = floor(mouseX / boxSize);
    let y = floor(mouseY / boxSize);
    grid[x][y] = alpha

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j] > 0) {
                let x = i * boxSize;
                let y = j * boxSize;
                noFill()

                if (grid[i][j] == alpha && isEl) {
                    setTimeout(() => {noStroke()}, 10000);
                } else {

                    stroke(80, 95, 95, grid[i][j]);
                    square(x, y, boxSize);
                    square(x, y, boxSize);
                }
            }
        }
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j] > 0 && !isEl) {
                grid[i][j] -= trail;
            }
            if (isEl) {
                grid[i][j] -= focusDelay;
            }
        }
    }
}



let isEl = false;
let elList = document.querySelectorAll('.nav-list')

elList.forEach(el => {

    el.addEventListener('mouseover', () => {
        // el.classList.add('nav-select')
        isEl = true
    })
    el.addEventListener('mouseout', () => {
        // el.classList.remove('nav-select')
        isEl= false
    })
})
