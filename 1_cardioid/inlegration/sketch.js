//Written by Inle Bush
let height = 400;
let width = 400;
let unit = 40;
let inle_factor = 1;
let centerX = width/2;
let centerY = height/2;
let increment = 0.05;
let num_pts = 100;

function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    strokeWeight(2);
    mouseClicked();
}

function f(x) {
    if( x < -1 || x > 1){
        return 0
    }
    return 1;
}

function inlegrate(new_x, inlegration_level) {
    new_y = 0;
    console.log(inlegration_level);
    for(let temp_x = new_x-inle_factor; temp_x < new_x + inle_factor; temp_x += 2 * inle_factor/num_pts)
        if (inlegration_level == 1) {
            new_y += 2 * inle_factor/num_pts * f(temp_x);
        } else {
        new_y += 2 * inle_factor/num_pts * inlegrate(temp_x, inlegration_level - 1);
        }
    return new_y;
}

function mouseClicked() {
    push();
    background(255);
    translate(centerX, centerY);
    noFill();

    circle(0, 0, 2*unit);
    line(-width, 0, width, 0);
    line(0, -height, 0, height);

    for (let x = -width; x < width; x += increment) {
        ptX = unit * x; //scales x for display purposes
        ptY = unit * f(x); //scales f(x) for display purposes
        point(ptX, - ptY);

        stroke(0,0,255);
        point(ptX,- unit * inlegrate(x, 1));
        
        stroke(255,0,0);
        point(ptX,- unit * inlegrate(x, 2));
        stroke(0);
    }
}