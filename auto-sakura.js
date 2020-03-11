function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#f0f8ff');
	
	fill('#8b4513');
	noStroke();
	rect(500, 300, 100, 250);
	isDark = false;
}

function draw() {
	let x = random(400, 700);
	let y = random(0, 350);
	if(y < 100){
		fill('#ffb7db');
	}else if(y >= 100 && y <200){
    fill('#ff99cc');
  }else{
    fill('#ff89c4');
	}
	ellipse(x, y, 20, 20);
	frameRate(10);
}

function keyTyped() {
	if(key == 'a'){
		if(isDark){
      background('#f0f8ff');
			fill('#8b4513');
			noStroke();
			rect(500, 300, 100, 250);
			isDark = false;
		}else{
			background('#000');
			fill('#8b4513');
			noStroke();
			rect(500, 300, 100, 250);
			isDark = true;
		}
	}
}
