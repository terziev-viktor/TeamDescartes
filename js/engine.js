/**
 * Created by Iliyan on 21-Jan-16.
 */

var app = app || {};

app.engine = (function () {
    window.requestAnimationFrame = window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 20);
    };
    function Engine() {

        this.gameIsRunning = false;
        this.gameIsOver = false;
    }

     function _init() {
        this.canvas = document.getElementById('gameplay');
        this.ctx = this.canvas.getContext('2d');
        this.bckg = app.background.load(this.canvas);
        this.wiz = app.wizard.load();
        this.pipe = app.pipe.load(0,0,0,0);
        this.gameOverImg = new Image();
        this.gameOverImg.src = "img/gameover.png";
        this.gameOverSprite = app.sprite.render(this.gameOverImg,
            0, 0, this.gameOverImg.width, this.gameOverImg.height);
        var width = window.innerWidth;
        var height = window.innerHeight;
        if (width >= 500) {
            width = 320;
            height = 480;
        }

        this.canvas.width = width;
        this.canvas.height = height;

        document.body.onclick = this.wiz.jump;

        console.log("canvas, context, wizard and pipes initialized");
        console.log("wizard sprite created");
    }

    function _update() {
        // Updates all objects in the game
        if(!this.wiz.update(this.gameIsOver)) {// true if the wizard is alive and false if otherwise
            this.gameIsOver = true;
        }
        this.pipe.update();
        this.bckg.update();
    }

    function _render() {
        // Draws all objects in the game on the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.bckg.draw(this.ctx);
        this.wiz.draw(this.ctx, this.gameIsOver);
        this.pipe.draw(this.ctx);
        if(this.gameIsOver) {
            this.gameOverSprite.draw(this.ctx, this.canvas.width/2-this.gameOverImg.width/2, this.canvas.height/2-this.gameOverImg.height/2);
        }

    }

     Engine.prototype.run = function() {
        // Updates and draws all objects in the game
        _init();
        console.log("Start button clicked. Game is running.");
        var now;
        var then;
        var fps = 20; // 1000 / frames per second;
        var loop = function() {
                now = Date.now();
                var delta = (now - then);
                while (delta < fps) {
                    now = Date.now();
                    delta = (now - then);
                }

                then = Date.now();
                _update();
                _render();
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