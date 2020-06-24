let height = 500;
let width = 500;
let tileWidth = 50;
let tileHeight = 50;

function setup() {
    createCanvas(height, width);
    stroke(255);
    strokeWeight(3);
    background(0);
    noFill();
    mouseClicked();
}

function mouseClicked() {
    background(0);
    for (let x = 0; x <= width; x += tileWidth) {
        for (let y = 0; y <= height; y += tileHeight) {
            let i = random([0, 1]);

            if (i == 0) {
                arc(x, y, tileWidth, tileHeight, 0, HALF_PI);
                arc(x + tileWidth, y + tileHeight, tileWidth, tileHeight, PI, PI + HALF_PI);
            } else {
                arc(x + tileWidth, y, tileWidth, tileHeight, HALF_PI, PI);
                arc(x, y + tileHeight, tileWidth, tileHeight, PI + HALF_PI, 0);
            }

            // if (i == 0) {
            //     line(x, y, x + tileWidth, y + tileHeight);
            // } else {
            //     line(x + tileWidth, y, x, y + tileHeight);
            // }
        }
    }
};