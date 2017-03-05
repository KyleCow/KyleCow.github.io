var playerX = 25;
var playerY = 25;
var playerR = 50;
var blockX = 300;
var blockY = 300;
var blockR = 1;
var goalX = 300;
var goalY = 450;
var goalR = 55;
var lives = 3;
var score = 0;

function setup(){
	createCanvas(600, 600);
	background(0);
}

function draw() {
	clear();
	if (key == 'W') {
	        playerY = playerY - 5;
	    } else if (key == 'A') {
	        playerX = playerX - 5;
	    } else if (key == 'S') {
	        playerY = playerY + 5;
	    } else if (key == 'D') {
	        playerX = playerX + 5;
	    }
		stroke(0);
		fill(255, 0, 0);
		textSize(32);
		text("lives: "+ lives, 500, 45);
		text("score: " + score, 300, 45);
		fill(20, 20, 200);
		noStroke();
		ellipse(playerX, playerY, playerR, playerR);
		stroke(0);
		noFill();
		strokeWeight(5);
		ellipse(blockX, blockY, blockR, blockR);
		noStroke();
		fill(0, 50, 50);
		ellipse(goalX, goalY, goalR, goalR);
		if (sqrt(sq(playerX - blockX) + sq(playerY - blockY)) < playerR/2 + blockR/2){
				console.log("yay");
				playerX = random(0, 600);
				playerY = random(0, 600);
				lives = lives - 1;
				blockR = 1;
				blockX = random(100, 600);
				blockY = random(100, 600);
		}
		if (sqrt(sq(playerX - goalX) + sq(playerY - goalY)) < playerR/2 + goalR/2){
			score = score + 1
			blockR = 1;
			goalX = random(100, 500);
			goalY = random(100, 500);
		}
		blockR = blockR + score;
		console.log(blockR);
		if(lives <= 0){
			clear();
			text("lol u lose", 300, 300);
		}
}


