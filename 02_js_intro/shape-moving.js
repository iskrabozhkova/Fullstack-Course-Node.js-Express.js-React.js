//task x=5 y=8 
//move(1,1) => x=6 y=9

function Shape(x,y){
    this.x = x || 0;
    this.y = y || 0;
}
Shape.prototype.move = function(deltaX, deltaY){
    this.x += deltaX;
    this.y += deltaY;
    console.log('Shape moved');
}
function Rectangle(x,y){
    Shape.call(this,x,y);
}
Rectangle.prototype = Object.create(Shape.prototype);
var rect = new Rectangle(5,8);

console.log("Before move: " + rect.x + ' ' + rect.y);
rect.move(1,1);
console.log("After move: " + rect.x + ' ' + rect.y);