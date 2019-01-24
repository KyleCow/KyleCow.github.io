let ball = [];
let amt = 500;


function setup() {
	createCanvas(window.screen.width, window.screen.height);
	background(0);
   	for(let i = 0; i < amt; i++){	
		ball[i] = new Particle();
	}
}

function draw() {
	background(0);
	for(let i = 0; i < amt; i++){	
    	ball[i].display();
		ball[i].move()
	}
}

