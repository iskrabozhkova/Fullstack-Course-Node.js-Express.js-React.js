function PostitionLogger(pos){
    var position = pos;
    var posArr = [{val: pos}];
    Object.defineProperty(this, 'position', {
        get: function(){
            return position;
        },
        set: function(val){
            position = val;
            posArr.push({val: position})
        },
        enumerable: true
    })
    this.getlog = function(){
        return posArr;
    }
}
var p1 = new PostitionLogger(5);
p1.position += 20;
p1.position -= 10;
console.log(p1.getlog());