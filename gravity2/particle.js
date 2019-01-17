function Particle(){
    stroke(255);
    fill(255);
	this.x = width/2;
	this.y = 0;
	this.diameter = 10;
	this.g = 1;
	this.v = 0;
	this.display = function() {
    	ellipse(this.x, this.y, this.diameter, this.diameter);
  	};
	this.fall = function(){
		if(this.y + this.diameter <= 590){
			this.v += this.g;
			this.y += this.v;
		} else {
			this.g = 0;
            this.v = 0;
		}
	}
}
