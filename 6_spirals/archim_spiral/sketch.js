let height = 750;
let width = 750;
centerX = width/2;
centerY = height/2;
a = 0;
b = 1;
scales = 10;
increment = 0.1;

function setup() {
    createCanvas(width, height);
    angleMode(RADIANS);
    background(0);
    stroke(255);
    strokeWeight(1);
};

function draw() {
    background(0);
    a = mouseX / 100;
    for(let ang = 0; ang < 100 * PI; ang += increment) {
        line(centerX + scales * (a + b * ang) * cos(ang), 
            centerY + scales * (a + b * ang) * sin(ang), 
            centerX + scales * (a + b * (ang + increment)) * cos(ang + increment), 
            centerY + scales * (a + b * (ang + increment)) * sin(ang + increment)
        );
    }
};