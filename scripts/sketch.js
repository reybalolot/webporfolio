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
let alpha = 255;
let boxSize = 20;//20
let trail = 10; //5
let focusDelay = trail + 2;
// let rand
let circleSize = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    cols = ceil(width / boxSize);
    rows = ceil(height / boxSize);
    grid = make2dArray(cols, rows);
    // rand = ceil(random(boxSize));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    mouseTrail();
    squareGridDisplay();
}

function draw() {
    background('#272727');
    mouseTrail();
    squareGridDisplay();
    // mouseSquare();
}

function squareGridDisplay() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            noFill()
            stroke(20, 20, 20, 10)
            rect(i * boxSize, j * boxSize, boxSize)
        }
    }
}

function mouseSquare() {
    // noFill()
    // stroke('white')
    // if (rand !== mouseX-(boxSize/2)) {
    //     rand++;
    // }
    // square(mouseX - rand, mouseY - rand, boxSize)
    // console.log(rand)
}

function mouseTrail() {
    let x = floor(mouseX / boxSize);
    let y = floor(mouseY / boxSize);
    grid[x][y] = alpha;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j] > 0) {
                let x = i * boxSize;
                let y = j * boxSize;
                if (grid[i][j] == alpha && isEl) {
                    setTimeout(() => {noStroke()}, 10000);
                } else {
                    noFill()
                    // fill(80, 95, 95)
                    stroke(80, 95, 95, grid[i][j]);
                    square(x, y, boxSize);
                    square(x, y, boxSize);
                }

                if (grid[i][j] == alpha & isEl) {
                    setTimeout(() => {
                            noFill();
                        noStroke();
                    }, 10000);
                } else {
                    fill(80, 95, 95)
                    ellipse(x + boxSize / 2, y + boxSize /2, circleSize)
                }
            }
        }
    }
    // fade
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            //&& !El
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
