
var app = app || {};


app.background = (function () {

	function Background(can) {
		this.canvas = can;
		this.img = new Image();
		this.img = new Image();
		this.x = 0;
		this.y = 0;
		this.img.src = 'img/background.png';
		this.sprite = app.sprite.render(this.img, 0, 0, this.img.width, this.img.height);
	}
	Background.prototype.update = function () {
		this.x--;
		if(this.x < -this.img.width) { this.x = 0;}
	};
	Background.prototype.draw = function(ctx) {
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotation);

		var pat=ctx.createPattern(this.img,"repeat");
		ctx.rect(this.x, this.y, this.img.width, this.img.height);
		ctx.fillStyle=pat;
		ctx.fill();
		ctx.restore();
	};

	return {
		load: function () {
			return new Background();
		}
	}

}());

