//Written by Inle Bush
let height = 729;
let width = 729;
let startX = width / 2;
let startY = height / 2;
let length = 30;
let angle = 120;

var axiom = "FNGNF";
var sentence = axiom;
var rules = [
    {in: "F", out: "FNG+F+GNF"}, 
    {in: "G", out: "GG"}
]

function setup() {
    createCanvas(height, width);
    background(0);
    angleMode(DEGREES);
    fill(255);
    strokeJoin(ROUND);
    stroke('white');
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
    for (let i = 0; i < sentence.length; i++) {
        current = sentence.charAt(i);
        if (current == "F" || current == "G") {
            line(0, 0, length, 0);
            translate(length, 0);
        } else if (current == "N"){
            console.log("also")
            rotate(-angle);
        } else if (current == "+"){
            console.log("this")
            rotate(angle);
        }
    }
}

function mouseClicked() {
    console.log(sentence)
    display();
    iterate();
}