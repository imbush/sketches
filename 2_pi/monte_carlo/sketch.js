//Written by Inle Bush
let height = 730;
let width = 700;
let radius = 310;
let centerX = width/2;
let centerY = radius + 50;
let total = 0;
let circCount = 0;


function setup() {
    div0 = createDiv()

    textFont('Georgia')
    button = createButton("Reset");
    button.size(width, 40)
    button.mousePressed(reset);
    div0.child(button)

    dots = createGraphics(2 * radius, 2 * radius)
    dots.strokeWeight(2);

    createCanvas(height, width);
    angleMode(DEGREES);
    noFill();
    textSize(20);
    strokeWeight(2);
}

function reset() {
    dots = createGraphics(2 * radius, 2 * radius);
    dots.strokeWeight(2);
    circCount = 0;
    total = 0;
}

function draw() {
    translate(centerX, centerY);
    x = random(-radius, radius);
    y = random(-radius, radius);
    total ++;

    if ( x ** 2 + y ** 2 < radius ** 2){
        circCount ++;
        dots.stroke('red')
    } else {
        dots.stroke('blue')
    }
    dots.point(radius + x, radius + y);

    fill(30);
    noStroke();
    background(200);
    circle(0, 0, 2*radius);

    noFill();
    stroke(100)
    rect(-radius, -radius, 2 * radius, 2 * radius);
    image(dots, -radius, -radius);
    
    fill('black');
    strokeWeight(1)
    text(`Number of points in Circle : Total= ${circCount} : ${total} = ${round(circCount / total, 4)}; π ≈ ${round(4 * circCount / total, 4)}`, 50 - centerX, 30 - centerY)
}