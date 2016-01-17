'use strict';
var canvas, // the canvas we are drawing on
    ctx, // an object that allows us to draw things on the canvas
    bird,// TODO: change the name to what we will be using in the game
    pipes,
    gameIsRunning = false;

function init() {
    canvas = document.getElementById('gamefield');
    ctx = canvas.getContext('2d');
    bird = {
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 0.25,
        jump: function() {
            // TODO: How will our bird jump ?
        },
        update: function() {
            // TODO: How will our bird behave ?
        },
        draw: function(ctx) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            // TODO: The bird should draw itself on the canvas

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

    console.log("canvas, context, bird and pipes initialized");
}

function update() {
    // Updates all objects in the game
    bird.update();
    pipes.update();
}

function render() {
    // Draws all objects in the game on the canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    bird.draw(ctx);
    pipes.draw(ctx);
}

function run() {
    // Updates and draws all objects in the game
    console.log("Start button clicked. Game is running.");
    var loop = function() {
        update();
        render();
        window.requestAnimationFrame(loop, canvas);
    };
    window.requestAnimationFrame(loop, canvas);
}

function main() {
    // Starts the game. The function is called when #start-button is clicked.
    gameIsRunning = true;
    init();
    run();

}

document.getElementById('start-button').addEventListener('click', main);



