function foo(x,y){
    for(arg of arguments){
        console.log(arg);
    }
    var arr = Array.prototype.slice.apply(arguments);
    var sum = arr.reduce(function(acc, elem) {
        return acc + elem;
    })
    return sum;
}

console.log(foo(1,2,3,4,5,6,7));