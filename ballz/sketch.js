var x;
var y;
var w;
var h;
var c1;
var c2;
var c3;
var linec1;
var linec2;
var linec3;
var linew;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	
	
	rate = createSlider(1, 100, 1, 0.1);
	rate.position(10, 20);
	rate.style('width', '140px');
}

function draw() {
	textSize(20);
	strokeWeight(4);
	stroke(0);
	fill(255);
	r = Math.floor(rate.value());
	text('Rate',70,55);
	for(var i = 0; i < r; i++){
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
}
