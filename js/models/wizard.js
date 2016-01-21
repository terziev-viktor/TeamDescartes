/**
 * Created by Iliyan on 20-Jan-16.
 */
var app = app || {};

app.wizard = (function () {
    function Wizard (){
        this.x = 20;
        this.y = 240;
        this.height = 0; //TODO find appropriate value
        this.width = 0; //TODO find appropriate value
        this.image = new Image();
        this.image.src = 'img/wz_anim.png';
        this.gravity = 0.25;
        this.frameNum = 0; // index of next sprite from sprite_wiz array that has to be drawn
        this.boundingBox = app.boundingBox.load(this.x,this.y,this.width, this.height);
    }

    Wizard.prototype.jump = function () {
        // TODO: How will our wizard jump ?
    };
    Wizard.prototype.update = function(){
        // TODO: How will our wizard behave ?
    };
    Wizard.prototype.draw = function(ctx){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // TODO: The wizard should draw itself on the canvas
        //ctx.drawImage(this.image, 10, 10, 50,50);

        ctx.restore();
    };

    return {
        load: function () {
            return new Wizard();
        }
    }

}());