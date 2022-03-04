var counter = (function func(){
    var count = 0;
    function inc(val){
        return count += val;
    }
    return {
        increment: function(){
            return inc(1);
        },
        decrement: function(){
            return inc(-1);
        }
    }
})();


console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());