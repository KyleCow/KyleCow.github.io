
function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	var canvas
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

}

function draw() {
	x = random(width);
	y = random(height);
	w = random(20,400)
	h = random(20, 400)
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

window.onresize = function() {
  var cw = window.innerWidth;
  var ch = window.innerHeight;  
  canvas.size(cw,ch);
  width = cw;
  height = ch;
  print(ch,cw);
};