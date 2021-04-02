function add(num) {
    let sum = num;

    function calc(num2) {
        sum += num2;
        return calc;
    }

    calc.toString = function() { return sum };
    return calc;
}
console.log(add(1)(6)(-3));

//It is pretty straightforward.
//
//    function add(a) {
//    var sum = a
//
//    function add_and_repeat(b) {
//        if(b){
//            sum += b
//            return add_and_repeat
//        }
//        else
//            return sum;
//    }
//
//    add_and_repeat.toString = function() { return sum }
//
//    return add_and_repeat
//}
//
//The "add" function will return another function "add_and_repeat", which when called just returns
//itself(not really itself but more like a copied version of itself). This means it will always return a
//function so how do you get the value? Every Function has a Function.prototype.toString() which can be
//tweaked to return the sum. The only drawback of this is the typeof returned value will be "function" and
//not a "number" as you'd expect. For that I have added an If condition, so now if you put a () at the end ' +
//'the typeof returned value will be a sum.