let ball = []
let amt = 1000;


function setup() {
	slider = createSlider(0,3,2,0.1);
	slider.position(0, 30);
	createCanvas(600, 600);
	background(0);
    for(let i = 0; i < amt; i++){	
		ball[i] = new Particle();
	}
}

function draw() {
	amt = 10**slider.value();
	background(0);
    text('Click to bounce',10,20);
	for(let i = 0; i < amt; i++){	
    	ball[i].display();
		ball[i].fall();
		ball[i].move()
	}
}

function mousePressed(){
    for(let i = 0; i < amt; i++){	
		ball[i].v = -random(5,15);
    	ball[i].y -= 5;
    	ball[i].g = 1;
		ball[i].vx = random(ball[i].vx,5);
	}
}
