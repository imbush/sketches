let height = 500;
let width = 500;
let border = 0;
let numPts = 10;

function setup() {
    createCanvas(height, width);
    angleMode(DEGREES);
    background(0);
    stroke(255);
    strokeWeight(5);
}

function leftMost(points) { 
    //points = list of [x, y]
    var leftest = points[0][0];
    var index = 0;
    for (let i = 1; i < points.length; i++) {
        if (leftest > points[i][0]) {
            index = i;
            leftest = points[i][0];
        }
    }
    point(points[index][0], points[index][1])
    return index;
}

function jarvis(s) {
    //s is set of points, made from pseudocode @https://en.wikipedia.org/wiki/Gift_wrapping_algorithm
    var hull = []; //set of points on hull in order
    //var minX  = s.map(function();
    var pointOnHull = s[leftMost(s)];
    let i = 0;
    do {
        hull.push(pointOnHull);
        endPoint = s[0];
        for (let j = 1; j < s.length; j++) {
            vect1 = createVector(endPoint[0] - hull[i][0], endPoint[1] - hull[i][1]);
            vect2 = createVector(s[j][0] - hull[i][0], s[j][1] - hull[i][1]);
            angle = vect1.angleBetween(vect2);
            if (endPoint == pointOnHull || angle < 0) {
                endPoint = s[j];
            }
        }
        pointOnHull = endPoint;
        i++
    } while (endPoint != hull[0]);

    return hull;
}

function mouseClicked() {
    background(0);
    stroke('WHITE');
    strokeWeight(5);

    var points = []
    for (let i = 0; i < numPts; i++) {
        x = random(border, width - border)
        y = random(border, height - border)
        points[i] = [x, y]
        point(x, y)
    }
    stroke(255, 0, 0);
    fill(255, 0, 0, 50);
    strokeWeight(2);
    const hull = jarvis(points);
    beginShape();
    for (let i = 0; i < hull.length; i++) {
        vertex(hull[i][0], hull[i][1])
    }
    endShape(CLOSE);
}