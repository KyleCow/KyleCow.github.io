var ballY = 0;
var ballX = 600;
var grav = 1;

function setup(){
	createCanvas(1200, 10000);
	background(51);
}

function draw(){
	clear();
	background(51);
	ellipse(ballX, ballY, 50, 50);
	if(key == "W"){
		grav = 1;
		ballY = ballY - 10;
	} else{
		ballY = ballY + grav;
		grav = grav + 1;
	}
	console.log(grav);
	console.log(key);
}
