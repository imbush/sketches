function setup() {
    let radius = 200
    createCanvas(3 * radius, 3 * radius);
    noStroke();
    fill(0, 0, 0, 100);

    for(ang = 0; ang < TWO_PI; ang += 0.1) {
        for (r = 0; r < radius; r += radius / 5) {
            circle(1.5 * radius + r * cos(ang), 1.5 * radius + r * sin(ang), 2 * radius);
        }
    }
}

function draw() {
}