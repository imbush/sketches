let tileWidth = 50;
let tileHeight = 50;
let tileValues = [];
let coloring;
let t = -10;
let seed = 17342;

function setup() {
    createCanvas(1400, 700);
    noStroke();
    for (let y = 0; y <= (height / tileHeight); y++) {
        tileValues[y] = [];
        for (let x = 0; x <= width / tileWidth; x++) {
            tileValues[y][x] = random([0, 1]);
        }
    }
    frameRate(20);
    colors = [[random(50, 70), random(90, 110), 100], [230, 230, 230]];
    coloring = colorTiles();
}

function draw() {
    background(0);
    // curveTightness(mouseX / width * 50 - 25);
    curveTightness(t);
    t += 0.1;
    for (let i = 0; i < tileValues.length; i++) {
        for (let j = 0; j < tileValues[0].length; j++) {
            fill(colors[coloring[i][j]][0], colors[coloring[i][j]][1], colors[coloring[i][j]][2]); //Add some alpha for fun
            rect(j * tileWidth, i * tileHeight, tileWidth, tileHeight)
            fill(colors[(coloring[i][j] + 1) % 2][0], colors[(coloring[i][j] + 1) % 2][1], colors[(coloring[i][j] + 1) % 2][2]);

            y = i * tileHeight;
            x = j * tileWidth;

            if (tileValues[i][j] == 0) {
                beginShape();
                vertex(x, y)
                curveVertex(x + tileWidth / 2, y);
                // curveVertex(x + tileWidth / 2, y);
                randomSeed(seed * j * sin(i));
                randX = random(0, tileWidth)
                curveVertex(x + randX, y + random(0, tileWidth - randX));
                // curveVertex(x, y + tileWidth / 2);
                curveVertex(x, y + tileWidth / 2);
                endShape(CLOSE);

                beginShape();
                vertex(x + tileWidth, y + tileHeight);
                // curveVertex(x + tileWidth, y + tileWidth / 2);
                curveVertex(x + tileWidth, y + tileWidth / 2);
                randomSeed(seed * j * cos(i + 0.25));
                randX = random(0, tileWidth)
                curveVertex(x + randX, y + random(tileWidth - randX, tileWidth));
                curveVertex(x + tileWidth / 2, y + tileHeight);
                // curveVertex(x + tileWidth / 2, y + tileHeight);
                endShape(CLOSE);
            } else {
                beginShape();
                vertex(x + tileWidth, y);
                curveVertex(x + tileWidth / 2, y);
                // curveVertex(x + tileWidth / 2, y);
                randomSeed(seed * sin(j) * i);
                randX = random(0, tileWidth)
                curveVertex(x + randX, y + random(0, randX));
                // curveVertex(x + tileWidth, y + tileWidth / 2);
                curveVertex(x + tileWidth, y + tileWidth / 2);
                endShape(CLOSE);

                beginShape();
                vertex(x, y + tileWidth)
                curveVertex(x, y + tileWidth / 2);
                // curveVertex(x, y + tileWidth / 2);
                randomSeed(seed * j + tan(i + 0.25));
                randX = random(0, tileWidth)
                curveVertex(x + randX, y + random(randX, tileWidth));
                curveVertex(x + tileWidth / 2, y + tileHeight);
                // curveVertex(x + tileWidth / 2, y + tileHeight);
                vertex(x, y + tileWidth)
                endShape(CLOSE);
            }
        }
    }
};

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