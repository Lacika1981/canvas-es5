
var c = document.querySelector("#c");
var ctx = c.getContext("2d");


var Path = function (x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
};

var Rectangle = function (x, y, width, height, ctx) {
    Path.apply(this, arguments);
    this.drawRect(x, y, width, height, ctx);
};

Rectangle.prototype = Object.create(Path.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.drawRect = function (x, y, width, height, ctx) {
    ctx.beginPath();
    ctx.lineTo(x, y);
    ctx.lineTo(x = x + width, y);
    ctx.lineTo(x, y = y + height);
    ctx.lineTo(x = x - width, y);
    ctx.strokeStyle = "black";
    ctx.closePath();
    ctx.stroke();
};

var Triangle = function (x, y, width, height, ctx) {
    Path.apply(this, arguments);
    this.drawTriangle(x, y, width, height, ctx);
};

Triangle.prototype = Object.create(Path.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.drawTriangle = function (x, y, width, height, ctx) {
    ctx.beginPath();
    ctx.lineTo(x, y);
    ctx.lineTo(x = x + width, y);
    ctx.lineTo(x, y = y + height);
    ctx.fillStyle = "green";
    ctx.closePath();
    ctx.fill();
};

var rect = new Rectangle(200, 200, 200, 200, ctx);
var tri = new Triangle(250, 250, 100, 100, ctx);