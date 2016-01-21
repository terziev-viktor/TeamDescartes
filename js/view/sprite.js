/**
 * Created by Iliyan on 21-Jan-16.
 */

var app = app || {};

app.sprite = (function () {
    function Sprite(img, x, y, width, height) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    Sprite.prototype.draw = function (ctx, x, y) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height, // Specify what to draw
            x, y, this.width, this.height); // Specify where to draw
    };

    return {
        render : function (img, x, y, width, height) {
            return new Sprite(img,x,y,width,height);
        }
    }
}());