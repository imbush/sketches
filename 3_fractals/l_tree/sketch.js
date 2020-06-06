//Written by Inle Bush
let height = 729;
let width = 729;
let startX = 10;
let startY = height -10;
let length = 2;
let angle = 25;

var axiom = "X";
var sentence = axiom;
var rules = [
    {in: "F", out: "FF"}, 
    {in: "X", out: "F+[[X]-X]-F[-FX]+X"}
]

function setup() {
    createCanvas(height, width);
    background(0);
    angleMode(DEGREES);
    fill(255);
    strokeJoin(ROUND);
    colorMode(HSL, 360);

}

function iterate() {
    next = "";
    for (let i = 0; i < sentence.length; i++) {
        current= sentence.charAt(i);
        var found = false;
        for (let j = 0; j < rules.length; j++) {
            if (current == rules[j].in) {
                next += rules[j].out;
                found = true;
                break;
            }
        }
        if (!found) {
            next += current;
        }
    }
    sentence = next;
}

function display() {
    resetMatrix();
    background(0);
    translate(startX, startY);
    rotate(-45);
    for (let i = 0; i < sentence.length; i++) {
        current = sentence.charAt(i);
        if (current == "F") {
            stroke(i/4, sentence.length, sentence.length * 5 / 9);
            line(0, 0, length, 0);
            translate(length, 0);
        } else if (current == "-") {
            rotate(angle);
        } else if (current == "+") {
            rotate(-angle);
        } else if (current == "[") {
            push();
        } else if (current == "]") {
            //leaves
            // stroke('green');
            // strokeWeight(2);
            // point(0,0);
            // strokeWeight(1);
            pop();
        }
    }
}

function mouseClicked() {
    colorMode(HSL, sentence.length);
    console.log(sentence)
    display();
    iterate();
}