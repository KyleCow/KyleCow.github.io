function Particle() {
	stroke(255);
	fill(255);
	this.x = random(width);
	this.y = random(height);
	this.v = random(1,3);
	this.diameter = 5 * this.v;
	this.display = function() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	};
	this.move = function(){
		if(this.x > width + this.diameter){
			this.x = 0 - this.diameter;
		}
		this.x += this.v;
	}
}
