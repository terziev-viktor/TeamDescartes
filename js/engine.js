/**
 * Created by Iliyan on 21-Jan-16.
 */

var app = app || {};

app.engine = (function () {
    function Engine() {
        this.canvas; // the canvas we are drawing
        this.ctx; // an object that allows us to draw things on the canvas
        this.wiz;
        this.pipe;
        this.gameIsRunning = false;
    }

    function _init () {
        this.canvas = document.getElementById('gameplay');
        this.ctx = this.canvas.getContext('2d');
        wiz = app.wizard.load();
        pipe = app.pipe.load(0,0,0,0); //TODO find appropriate values and make other pipes in array
        var width = window.innerWidth;
        var height = window.innerHeight;
        if (width >= 500) {
            width = 320;
            height = 480;
        }

        this.canvas.width = width;
        this.canvas.height = height;
        console.log("canvas, context, bird and pipes initialized");
        console.log("wizard sprite created");
    };

    function _update() {
        // Updates all objects in the game
        this.wiz.update();
        this.pipe.update();
    };

    function _render() {
        // Draws all objects in the game on the canvas
        document.addEventListener("click", this.wiz.jump()); //TODO find way to implement jump on mouse click
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.wiz.draw(this.ctx);
        this.wiz.sprite[this.wiz.frameNum++].draw(this.ctx, 0, 150);
        if(this.wiz.frameNum == 3){
            this.wiz.frameNum = 0;
        }
        this.pipe.draw(this.ctx);
    };

     Engine.prototype.run = function() {
        // Updates and draws all objects in the game
         _init();
        console.log("Start button clicked. Game is running.");
        var now;
        var then;
        var fps = 1000/15; // 1000 / frames per second;
        var loop = function() {
            _update();
            _render();
            now = Date.now();
            var delta = (now - then);
            while(delta < fps) {
                now = Date.now();
                delta = (now - then);
            }
            then = Date.now();
            window.requestAnimationFrame(loop, this.canvas);
        };

        then = Date.now();
        setTimeout(window.requestAnimationFrame(loop, this.canvas), 1000);
    };

    return {
        load : function () {
           return new Engine();
        }
    }

}());