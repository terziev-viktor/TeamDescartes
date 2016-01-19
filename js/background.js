(function() {
	window.requestAnimationFrame = window.requestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame || function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};

	var canvas = document.getElementById('gamefield');
	var context = canvas.getContext('2d');
	var looping = false;
	var totalSeconds = 0;
	var btn = document.getElementById('start-button'); //start button;

	var width = window.innerWidth;
	var height = window.innerHeight;
	if (width >= 500) {
		width = 320;
		height = 480;
	}
	canvas.width = width;
	canvas.height = height;
	
	var img = new Image();
	img.onload = imageLoaded;
	img.src = 'img/background.png';

	function imageLoaded() {
		draw(0);

		//btn = document.getElementById('start-button');
		btn.addEventListener('click', function() {
			startGame();
		});
	}

	var lastFrameTime = 0;

	function startGame() {
		looping = true;		
		var container = document.getElementById('container');
		//container.removeChild(btn);
		btn.remove();
		//btn = document.getElementById('start-button');
	    lastFrameTime = Date.now();
	    requestAnimationFrame(loop);
	}

	function loop() {
		if (!looping) {
			return;
		}

		requestAnimationFrame(loop);

		var now = Date.now();
		var deltaSeconds = (now - lastFrameTime) / 1000;
		lastFrameTime = now;
		draw(deltaSeconds);
	}

	function draw(delta) {
		totalSeconds += delta;

		var speed = 100; // the background scrolls with a speed of 100
							// pixels/sec
		var numImages = Math.ceil(canvas.width / img.width) + 1;
		var x_pos = totalSeconds * speed % img.width;

		context.save();
		context.translate(-x_pos, 0);
		for (var i = 0; i < numImages; i++) {
			context.drawImage(img, i * img.width, 0);
		}
		context.restore();
	}
}());

