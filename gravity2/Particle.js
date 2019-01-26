function Particle() {
	stroke(255);
	fill(255);
	this.x = random(width);
	this.y = random(height);
	this.diameter = 10;
	this.g = 1;
	this.v = 0;
	this.vx = random(1,3);
	this.display = function() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	};
	this.fall = function() {
		if (this.y + this.diameter < 600 && this.y - this.diameter > 0) {
			this.v += this.g;
			this.y += this.v;
		} else if (this.y + this.diameter > 600) {
			if(abs(this.v) > 4.5){
				this.v = -this.v * random(0.7,0.9);
				this.vx =this.vx * random(0.7,0.9);
				this.y = 600 - this.diameter-4;
			} else {
				this.v = 0;
			}
			//this.g = 0;
		} else if (this.y - this.diameter < 0) {
			this.v = 0;
			this.y = this.diameter + 3;
		}
	}
	this.move = function(){
		if(this.x > 600 + this.diameter){
			this.x = 0 - this.diameter;
		}
		
		if (this.y + this.diameter < 600) {
			this.x += this.vx;
		}
	}
}
