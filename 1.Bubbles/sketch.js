var bubbles = [];

function setup(){

	createCanvas(600, 600);
	background(139,69,19);
	fill(100,255,255);
	for(var i = 0; i < 100; i++){
		bubbles[i] = new Bubble();
	}
	frameRate(90);
}

function draw(){
	background(139,69,19);
	fill(255,255,255);
	for(var i = 0 ; i < bubbles.length ; i++){
		bubbles[i].update();
		bubbles[i].show();
	}
}
