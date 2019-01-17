function setup() {
	createCanvas(600, 600);
	background(0);
    ball = new Particle();
}

function draw() {
	background(0);
    text('Click to bounce',10,20);
	ball.fall();
    ball.display();
}

function mousePressed(){
    ball.v = -10;
    ball.y -= 5;
    ball.g = 1;
}
