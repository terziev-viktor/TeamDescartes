'use strict';
var canvas, // the canvas we are drawing on
    ctx, // an object that allows us to draw things on the canvas
    wiz, // Main character of the game
    pipes,
    gameIsRunning = false,
    sprite_wiz; // Holds 4 frames of the main character of our game

// Sprite - holds an image from a spritesheet
function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
Sprite.prototype.draw = function(ctx, x, y) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height, // Specify what to draw
        x, y, this.width, this.height); // Specify where to draw
};

// img - the spritesheet of our wizard
function initSprites(img) {
    sprite_wiz = [
        new Sprite(img, 0, 0, img.width/4, img.height), // TODO: Check if the position is correct (2nd and 3rd param)
        new Sprite(img, img.width/4, 0, img.width/4, img.height),
        new Sprite(img, img.width/2, 0, img.width/4, img.height),
        new Sprite(img, img.width/4*3, 0, img.width/4, img.height)
    ]
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
    wiz = {
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 0.25,
        frameNum: 0, // index of next sprite from sprite_wiz array that has to be drawn
        jump: function() {
            // TODO: How will our wizard jump ?
        },
        update: function() {
            // TODO: How will our wizard behave ?
        },
        draw: function(ctx) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            // TODO: The wizard should draw itself on the canvas

            ctx.restore();
        }
    };
    pipes = {
        x: 0,
        y: 0,
        rotation: 0,
        update: function() {
            // TODO: How will our pipes behave ?
        },
        draw: function(ctx) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            // TODO: The pipe should draw itself on the canvas

            ctx.restore();
        }
    };
    var img = new Image();
    img.src = "./img/wz_anim.png";
    initSprites(img);
    console.log("canvas, context, bird and pipes initialized");
    console.log("wizard sprite created");
}

function update() {
    // Updates all objects in the game
    wiz.update();
    pipes.update();
}

function render() {
    // Draws all objects in the game on the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    wiz.draw(ctx);
    sprite_wiz[wiz.frameNum++].draw(ctx, 5, 150);
    if(wiz.frameNum == 3) wiz.frameNum = 0;
    pipes.draw(ctx);
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



