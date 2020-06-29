let height = 500;
let width = 500;
let tileWidth = 25;
let tileHeight = 25;
let tileValues = [];

function setup() {
    createCanvas(width, height);
    noStroke();
    mouseClicked();
}

function mouseClicked() {
    background(0);
    for (let y = 0; y <= (height / tileHeight); y++) {
        tileValues[y] = [];
        for (let x = 0; x <= width / tileWidth; x++) {
            tileValues[y][x] = random([0, 1]);
        }
    }

    colors = [[random(50, 70), random(90, 110), 100], [230, 230, 230]];
};

function draw() {

    for (let i = 0; i < 3; i++) {
        changeX = floor(random(0, tileValues.length - 0.001));
        changeY = floor(random(0, tileValues[0].length - 0.001));
        if (changeX == 0 && changeY == 0) {//Doesn't change the coloring scheme
            changeX = 1;
        }
        tileValues[changeX][changeY] = (tileValues[changeX][changeY] + 1) % 2;
    }
    let coloring = colorTiles();
    
    for (let i = 0; i < tileValues.length; i++) {
        for (let j = 0; j < tileValues[0].length; j++) {
            fill(colors[coloring[i][j]][0], colors[coloring[i][j]][1], colors[coloring[i][j]][2]); //Add some alpha for fun
            rect(j * tileWidth, i * tileHeight, tileWidth, tileHeight)
            fill(colors[(coloring[i][j] + 1) % 2][0], colors[(coloring[i][j] + 1) % 2][1], colors[(coloring[i][j] + 1) % 2][2]);

            //Curves
            if (tileValues[i][j] == 0) { // 0 == top left, bottom right curve
                arc(j * tileWidth, i * tileHeight, tileWidth, tileHeight, 0, HALF_PI);
                arc((j + 1) * tileWidth, (i + 1) * tileHeight, tileWidth, tileHeight, PI, PI + HALF_PI);
            } else { // 1 == top right, bottom left curve
                arc((j + 1) * tileWidth, i * tileHeight, tileWidth, tileHeight, HALF_PI, PI);
                arc(j * tileWidth, (i + 1) * tileHeight, tileWidth, tileHeight, PI + HALF_PI, 0);
            }

            //Lines
            // if (tileValues[i][j] == 0) { // 0 == top left, bottom right curve
            //     triangle(j * tileWidth, i * tileHeight, j * tileWidth + tileWidth/2, i * tileHeight, j * tileWidth, i * tileHeight + tileHeight/2);
            //     triangle((j + 1) * tileWidth, (i + 1) * tileHeight, j * tileWidth + tileWidth/2, (i + 1) * tileHeight, (j + 1) * tileWidth, i * tileHeight + tileHeight/2);
            // } else { // 1 == top right, bottom left curve
            //     triangle((j + 1) * tileWidth, i * tileHeight, j * tileWidth + tileWidth/2, i * tileHeight, (j + 1) * tileWidth, i * tileHeight + tileHeight/2);
            //     triangle(j * tileWidth, (i + 1) * tileHeight, j * tileWidth + tileWidth/2, (i + 1) * tileHeight, j * tileWidth, i * tileHeight + tileHeight/2);
            // }
        }
    }

    // stroke(50, 50, 50);
    // noFill();
    // for (let rad = 200; rad < width; rad++) {
    //     circle(width/2, height/2, rad * 2)
    // }
    // noStroke();
}

function colorTiles() {
    //For any neighboring tiles, if they have the same pattern, they have opposite colorings and opposite pattern = same coloring
    let colorArray = [[0]];

    for (let y = 1; y < tileValues.length; y++) { //sets the first column
        if (tileValues[y][0] == tileValues[y-1][0]) {
            colorArray[y] = [(colorArray[y-1][0] + 1) % 2];
        } else {
            colorArray[y] = [colorArray[y-1][0]];
        }
    }

    for (let y = 0; y < tileValues.length; y++) {
        for(let x = 1; x < tileValues[0].length; x++) {
            if (tileValues[y][x] == tileValues[y][x-1]) {
                colorArray[y][x] = (colorArray[y][x-1] + 1) % 2;
            } else {
                colorArray[y][x] = colorArray[y][x-1];
            }
        }
    }
    return colorArray;
}