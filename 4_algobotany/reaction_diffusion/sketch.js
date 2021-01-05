let pixelHeight, pixelWidth, conc, tempConc;
let Da = 1.0;
let Db = 0.5;
let Dt = 0.01;    // Time Step
let f = 0.055;
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
            if (x ** 2 + y ** 2 < (pixelWidth + 2) / 10) {
                conc[y][x] = [0, 1];
                tempConc[y][x] = [0, 1];
            } else {
                conc[y][x] = [1, 0];
                tempConc[y][x] = [1, 0];
            }
        }
    }
    console.log(conc.length);
}

function draw() {
    loadPixels();
    for (let x = 1; x < pixelWidth + 1; x++) {
        for (let y = 1; y < pixelHeight + 1; y++) {
            updateConcentration(x, y)
            pixelIndex = 4 * (x - 1 + (y - 1) * pixelWidth);
            bright = floor(255 * (tempConc[y][x][0] - tempConc[y][x][1] + 1) / 2);
            pixels[pixelIndex] = bright;
            pixels[pixelIndex + 1] = bright;
            pixels[pixelIndex + 2] = bright;
            pixels[pixelIndex + 3] = 255;
        }
    }
    updatePixels();
    swap(tempConc, conc);
}

function updateConcentration(x, y) {
    let A = conc[y][x][0];
    let B = conc[y][x][1];
    console.log(A)
    let newA = A + (Da * laplacian(x, y, 0) - A * B ** 2 + f * (1 - A)) * Dt;
    let newB = B + (Db * laplacian(x, y, 1) + A * B ** 2 - (k + f) * B) * Dt;

    tempConc[y][x][0] = newA;
    tempConc[y][x][1] = newB;
}

function laplacian(x, y, index) {
    let convolution = [[.05, .2, .5],
                       [.2, -1, .2],
                       [.05, .2, .5]];
    let value = 0;

    for (let convX = 0; convX < convolution.length; convX++) {
        for (let convY = 0; convY < convolution.length; convY++) {
            value += convolution[convY][convX] * conc[y + convY - 1][x + convX - 1]; 
        }
    }
    
    return value;
}

function swap(arr1, arr2) {
    const temp = arr1;
    arr1 = arr2;
    arr2 = arr1;
}