
var app = app || {};


app.background = (function () {

	function Background(can) {
		this.canvas = can;
		this.img = new Image();
		this.img = new Image();
		this.x = 0;
		this.y = 0;
		this.img.src = 'img/background.png';
		this.delta = this.img.width;
		this.sprite = app.sprite.render(this.img, 0, 0, this.img.width, this.img.height);
	}
	Background.prototype.update = function () {
		this.x = (this.delta--) % this.img.width;
		if(this.delta < 0) {this.delta = this.img.width;}
	};
	Background.prototype.draw = function(ctx) {
		ctx.save();
		ctx.translate(this.x, this.y);

		var pat=ctx.createPattern(this.img, "repeat");
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

