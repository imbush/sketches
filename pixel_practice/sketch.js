let img;

function setup() {
    createCanvas(603, 361);
    img = loadImage('big_boy_kman.png');
    img.loadPixels();
}

function mouseClicked() {
    background(img);
}

function draw() {
    noStroke();
    fill(img.get(mouseX,mouseY))
    let size = 50* cos(2*PI*mouseX/603)+70
    ellipse(mouseX, mouseY, size, size);
}