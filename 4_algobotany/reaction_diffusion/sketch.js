let pixelHeight, pixelWidth, conc, tempConc;
let Da = 0.01;
let Db = 0.01;
let Dt = 1;    // Time Step
let f = 0.062;
let k = 0.062;

function setup() {
    createCanvas(500, 500);
    pixelDensity(1);    // Set pixel density
    pixelHeight = floor(height * pixelDensity());
    pixelWidth = floor(width * pixelDensity());

    tempConc = [];
    conc = [];    // Set initial concentration
    for (let y = 0; y < pixelHeight + 2; y++) {
        conc[y] = [];
        tempConc[y] = [];
        for (let x = 0; x < pixelWidth + 2; x++) {
            // if ((pixelWidth / 2 - x) ** 2 + (pixelHeight / 2 - y) ** 2 < (pixelWidth + 2) / 4) {
            //     conc[y][x] = [0, 1];
            //     tempConc[y][x] = [0, 1];
            // } else {
            //     conc[y][x] = [1, 0];
            //     tempConc[y][x] = [1, 0];
            // }
            conc[y][x] = [random(), random()];
            tempConc[y][x] = [random(), random()];
        }
    }
    console.log(conc.length);
}

function draw() {
    updateConcentration();

    loadPixels();
    for (let x = 1; x < pixelWidth + 1; x++) {
        for (let y = 1; y < pixelHeight + 1; y++) {
            pixelIndex = 4 * (x - 1 + (y - 1) * pixelWidth);
            bright = floor(255 * (conc[y][x][0] - conc[y][x][1] + 1) / 2);
            pixels[pixelIndex] = bright;
            pixels[pixelIndex + 1] = bright;
            pixels[pixelIndex + 2] = bright;
            pixels[pixelIndex + 3] = 255;
        }
    }
    updatePixels();
}

function updateConcentration() {
    let A, B, newA, newB;
    for (let x = 1; x < pixelWidth + 1; x++) {
        for (let y = 1; y < pixelHeight + 1; y++) {
            A = conc[y][x][0];
            B = conc[y][x][1];
            newA = A + (Da * laplacian(x, y, 0) - A * B ** 2 + f * (1 - A)) * Dt;
            newB = B + (Db * laplacian(x, y, 1) + A * B ** 2 - (k + f) * B) * Dt;

            tempConc[y][x][0] = newA;
            tempConc[y][x][1] = newB;
        }
    }
    temp = tempConc;
    tempConc = conc;
    conc = temp;
}

function laplacian(x, y, index) {
    let value = - 1 * conc[y][x][index];
    value += 0.2 * conc[y + 1][x][index];
    value += 0.2 * conc[y - 1][x][index];
    value += 0.2 * conc[y][x + 1][index];
    value += 0.2 * conc[y][x - 1][index];
    value += 0.05 * conc[y + 1][x + 1][index];
    value += 0.05 * conc[y + 1][x - 1][index];
    value += 0.05 * conc[y - 1][x + 1][index];
    value += 0.05 * conc[y - 1][x - 1][index];

    return value;
}