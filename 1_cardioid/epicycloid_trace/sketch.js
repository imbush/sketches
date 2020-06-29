//Written by Inle Bush
let ratio = 0; //Outer to innner radius
let radOut = 150 / (ratio + 1);
let radIn = radOut * ratio;
let limit = 2;
let increment = 0.001;
let ptX, ptY;


function setup() {
  createCanvas(500, 500);
  background(20, 10, 30);
}


function mouseClicked() {
    stroke(155, 140, 255, 30);
    
    noFill();
    push();
    translate(width / 2, height / 2);
    
    for (let i = 1; i < limit; i ++) {
        ratio += 1;
        radOut = width * 5 / 12 / (ratio + 2); // Width * 5/12 is maximum radius
        radIn = radOut * ratio;
        for (let ang = 0; ang <= TWO_PI; ang += increment) {
            ptX = (radOut + radIn) * cos(ang) - radOut * cos((ratio + 1) * ang);
            ptY = (radOut + radIn) * sin(ang) - radOut * sin((ratio + 1) * ang);
            point(ptX, ptY);
        }
    }
    pop();

    fill(20, 10, 30);
    noStroke();
    rect(0, 0, width / 5, height / 5) //Background for text

    stroke(255);
    noStroke();
    textSize(width/20);
    fill(255);
    text(`k = ${ratio}`, width / 50 , height * 3 / 50);
}