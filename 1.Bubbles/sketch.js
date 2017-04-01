var bubbles = [];

function setup(){
	// colorMode(HSB);
	createCanvas(600, 600);
	background(139,69,19);
	fill(100,255,255);
	for(var i = 0; i < 100; i++){
		bubbles[i] = new Bubble();
	}
	frameRate(90);
	// noStroke();
}

function draw(){
	background(139,69,19);
	fill(255,255,255);
	for(var i = 0 ; i < bubbles.length ; i++){
		if(bubbles[i].y < 0)
			bubbles[i] = new Bubble();

		bubbles[i].update();
		bubbles[i].show();
	}
}
