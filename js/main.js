'use strict';
var canvas, // the canvas we are drawing on
    ctx, // an object that allows us to draw things on the canvas
    wiz = app.wizard.load(),
    pipe = app.pipe.load(0,0,0,0), //TODO find appropriate values and make other pipes in array
    gameIsRunning = false,
    sprite_wiz; // Holds 4 frames of the main character of our game

// img - the spritesheet of our wizard
function initSprites(img) {
    sprite_wiz = [
        app.sprite.render(img, 0, 0, img.width/4, img.height), // TODO: Check if the position is correct (2nd and 3rd param)
        app.sprite.render(img, img.width/4, 0, img.width/4, img.height),
        app.sprite.render(img, img.width/2, 0, img.width/4, img.height),
        app.sprite.render(img, img.width/4*3, 0, img.width/4, img.height)
    ];
}

function init() {
    canvas = document.getElementById('gameplay');
    ctx = canvas.getContext('2d');
    var width = window.innerWidth;
	var height = window.innerHeight;
	if (width >= 500) {
		width = 320;
		height = 480;
	}
	canvas.width = width;
	canvas.height = height;

    var img = new Image();
    img.src = "./img/wz_anim.png";
    initSprites(img);
    console.log("canvas, context, bird and pipes initialized");
    console.log("wizard sprite created");
}

function update() {
    // Updates all objects in the game
    wiz.update();
    pipe.update();
}

function render() {
    // Draws all objects in the game on the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    wiz.draw(ctx);
    sprite_wiz[wiz.frameNum++].draw(ctx, 0, 150);
    if(wiz.frameNum == 3) wiz.frameNum = 0;
    pipe.draw(ctx);
}

function run() {
    // Updates and draws all objects in the game
    console.log("Start button clicked. Game is running.");
    var now;
    var then;
    var fps = 1000/15; // 1000 / frames per second;
    var loop = function() {
        update();
        render();
        now = Date.now();
        var delta = (now - then);
        while(delta < fps) {
            now = Date.now();
            delta = (now - then);
        }
        then = Date.now();
        window.requestAnimationFrame(loop, canvas);
    };
    then = Date.now();
    setTimeout(window.requestAnimationFrame(loop, canvas), 1000);
}

function main() {
    // Starts the game. The function is called when #start-button is clicked.
    if(!gameIsRunning) {
        gameIsRunning = true;
        init();
        run();
    }
}

document.getElementById('start-button').addEventListener('click', main);

document.addEventListener("click", wiz.jump());




