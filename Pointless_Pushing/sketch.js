var playerX = 300;
var playerY = 300;
var playerR = 50;
var ballX = 360;
var ballY = 360;
var ballR = 30;
var babyX = 390;
var babyY = 390;
var babyR = 10;
var dotX = 410;
var dotY = 410;
var dotR = 5;

function setup(){
	createCanvas(1920,1080);
	background(51);
}

function draw(){
	clear();
	background(51);
	stroke(0);
	noFill();
	strokeWeight(3);
	ellipse(playerX, playerY, playerR, playerR);
	if (key == 'W') {
	        playerY = playerY - 5;
	    } else if (key == 'A') {
	        playerX = playerX - 5;
	    } else if (key == 'S') {
	        playerY = playerY + 5;
	    } else if (key == 'D') {
	        playerX = playerX + 5;
	    }
	stroke(127.5);
	noFill();
	strokeWeight(3);
	ellipse(ballX, ballY, ballR, ballR)
	if (sqrt(sq(playerX - ballX) + sq(playerY - ballY)) < playerR/2 + ballR/2){
		if (key == 'W') {
			ballY = ballY - 5;
		} else if (key == 'A') {
			ballX = ballX - 5;
		} else if (key == 'S') {
			ballY = ballY + 5;
		} else if (key == 'D') {
			ballX = ballX + 5;
		}
	}
	stroke(190);
	noFill();
	strokeWeight(3);
	ellipse(babyX, babyY, babyR, babyR)
	if (sqrt(sq(ballX - babyX) + sq(ballY - babyY)) < ballR/2 + babyR/2){
		if (key == 'W') {
			babyY = babyY - 5;
		} else if (key == 'A') {
			babyX = babyX - 5;
		} else if (key == 'S') {
			babyY = babyY + 5;
		} else if (key == 'D') {
			babyX = babyX + 5;
		}
	}
	if (sqrt(sq(playerX - babyX) + sq(playerY - babyY)) < playerR/2 + babyR/2){
		if (key == 'W') {
			babyY = babyY - 5;
		} else if (key == 'A') {
			babyX = babyX - 5;
		} else if (key == 'S') {
			babyY = babyY + 5;
		} else if (key == 'D') {
			babyX = babyX + 5;
		}
	}
	stroke(255);
	noFill();
	strokeWeight(3);
	ellipse(dotX, dotY, dotR, dotR);
	if (sqrt(sq(playerX - dotX) + sq(playerY - dotY)) < playerR/2 + dotR/2){
		if (key == 'W') {
			dotY = dotY - 5;
		} else if (key == 'A') {
			dotX = dotX - 5;
		} else if (key == 'S') {
			dotY = dotY + 5;
		} else if (key == 'D') {
			dotX = dotX + 5;
		}
	}
	if (sqrt(sq(ballX - dotX) + sq(ballY - dotY)) < ballR/2 + dotR/2){
		if (key == 'W') {
			dotY = dotY - 5;
		} else if (key == 'A') {
			dotX = dotX - 5;
		} else if (key == 'S') {
			dotY = dotY + 5;
		} else if (key == 'D') {
			dotX = dotX + 5;
		}
	}
	if (sqrt(sq(babyX - dotX) + sq(babyY - dotY)) < babyR/2 + dotR/2){
		if (key == 'W') {
			dotY = dotY - 5;
		} else if (key == 'A') {
			dotX = dotX - 5;
		} else if (key == 'S') {
			dotY = dotY + 5;
		} else if (key == 'D') {
			dotX = dotX + 5;
		}
	}
}
