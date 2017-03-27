var x = random(width);
var y = random(height);
var w = random(2,42);
var h = random(2, 42);
var c1 = random(0,255);
var c2 = random(0,255);
var c3 = random(0,255);
var linec1 = random(0,255);
var linec2 = random(0,255);
var linec3 = random(0,255);
var linew = random(2, 13);

function setup() {
createCanvas(1920, 1080)
background(0);
}

function draw() {
	x = random(width);
	y = random(height);
	w = random(2,42)
	h = random(2, 42)
	c1 = random(0,255);
	c2 = random(0,255);
	c3 = random(0,255);
	linec1 = random(0,255);
	linec2 = random(0,255);
	linec3 = random(0,255);
	linew = random(2, 13);
	stroke(linec1, linec2, linec3);
	strokeWeight(linew)
	fill(c1, c2, c3);
	ellipse(x, y ,w ,h);
}
