/**
 * Created by Iliyan on 21-Jan-16.
 */
var app = app || {};

app.pipe = (function () {
    function Pipe (x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.boundingBox = app.boundingBox.load(x,y,w,h);
    }

    Pipe.prototype.update = function() {
        // TODO: How will our pipes behave ?
    };
    Pipe.prototype.draw =  function(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // TODO: The pipe should draw itself on the canvas

        ctx.restore();
    };

    return {
        load: function(x,y,w,h){
            return new Pipe(x,y,w,h);
        }
    }
}());