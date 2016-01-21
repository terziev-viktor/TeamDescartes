/**
 * Created by Iliyan on 20-Jan-16.
 */
var app = app || {};

app.wizard = (function () {
    function Wizard (){
        this.x = 5;
        this.y = 50;
        this.height = 0; //TODO find appropriate value
        this.width = 0; //TODO find appropriate value
        this.img = new Image();
        this.img.src = 'img/wz_anim.png';
        this.gravity = 2;
        this.jumpHeight = 20;// Maximum height in px
        this.isJumping = false; // 1 -> jumping, 0 -> not jumping
        this.frameNum = 0; // index of next sprite from sprite_wiz array that has to be drawn
        this.boundingBox = app.boundingBox.load(this.x,this.y,this.width, this.height);
        this.sprite = [
            app.sprite.render(this.img, 0, 0, this.img.width/4, this.img.height), // TODO: Check if the position is correct (2nd and 3rd param)
            app.sprite.render(this.img, this.img.width/4, 0, this.img.width/4, this.img.height),
            app.sprite.render(this.img, this.img.width/2, 0, this.img.width/4, this.img.height),
            app.sprite.render(this.img, this.img.width/4*3, 0, this.img.width/4, this.img.height)
        ];
    }

    Wizard.prototype.jump = function () {
        Wizard.isJumping = true;
        if(Wizard.isJumping == 1) console.log('jump function called! isJumping = ' + Wizard.isJumping);
    };
    Wizard.prototype.update = function(){
        this.y += this.gravity;
        console.log('update function is jumping = ' + this.isJumping)
        if(Wizard.isJumping == true) {
            this.y -= 5;
            this.jumpHeight -= 2;
        }
        if(this.jumpHeight == 0) {
            this.jumpHeight = 20;
            Wizard.isJumping = false;
        }

    };
    Wizard.prototype.draw = function(ctx){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        this.sprite[this.frameNum++].draw(ctx, this.x, this.y);
        if(this.frameNum == 3){
            this.frameNum = 0;
        }

        ctx.restore();
    };

    return {
        load: function () {
            console.log("Created a Wizard!");
            return new Wizard();
        }
    }

}());